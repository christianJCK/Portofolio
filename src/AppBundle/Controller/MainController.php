<?php


namespace AppBundle\Controller;


use AppBundle\Entity\Contact;
use AppBundle\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MainController extends Controller
{
    public function indexAction(Request $request)
    {
        $contact = new Contact();
        $formContact = $this->createForm(ContactType::class, $contact);
        $formContact->handleRequest($request);
        $data = $formContact->getData();


        if ($formContact->isSubmitted() && $formContact->isValid()) {
            $em = $this->getDoctrine()->getManager();

            $em->persist($contact);
            $em->flush();

            $message = \Swift_Message::newInstance();
            $message->setFrom($this->getParameter('mailer_user'))
                ->setTo('goteki85@gmail.com')
                ->setBody('text/html');

            $this->get('mailer')->send($message);
        }

        return $this->render('app/main/index.html.twig', array(
            'form' => $formContact->createView()
        ));
    }
}