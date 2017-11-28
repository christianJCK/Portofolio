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
            /*$em = $this->getDoctrine()->getManager();

            $em->persist($contact);
            $em->flush();

            $message = \Swift_Message::newInstance();
            $message->setFrom($data->getMail())
                ->setTo('goteki85@gmail.com')
                ->setBody($data->getMail() . ' ' . $data->getMessage());

            $this->get('mailer')->send($message);*/

            $headers = 'From: goteki85@gmail.com' . "\n";
            $headers .= 'Reply-To: goteki85@gmail.com' . "\n";
            $headers .= 'Content-Type: text/html; charset="utf-8"' . "\n";
            $headers .= 'Content-Transfer-Encoding: 8bit';
            mail(
                'goteki85@gmail.com',

                'sujet',
                $data->getMail() . ' ' . $data->getMessage(),
                $headers);

            $this->addFlash('notice', "<strong>MESSAGE ENVOYÉ !</strong><br> J'essaierais d'y répondre le plus rapidement possible.<br>
             En attendant vous pouvez consulter cette délicieuse <a href='http://www.marmiton.org/recettes/recette_pancakes-a-la-banane_45575.aspx' target='_blank'>recette</a> de pancake. À bientôt !");

            return $this->redirectToRoute('app_homepage');
        }

        return $this->render('app/main/index.html.twig', array(
            'form' => $formContact->createView(),
        ));
    }
}