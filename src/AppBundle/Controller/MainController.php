<?php


namespace AppBundle\Controller;


use AppBundle\Entity\Contact;
use AppBundle\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        return $this->render('app/main/index.html.twig', array(
            'form' => $form->createView()
        ));
    }


}