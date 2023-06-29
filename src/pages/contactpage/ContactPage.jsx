import { AspectRatio, Container } from '@chakra-ui/react';
import React from 'react';
import CallToActionWithAnnotation from '../../components/Contact';
import Contact2 from '../../components/Contact2';

function ContactPage(props) {
  return (
    <div>
      <CallToActionWithAnnotation />
      <Container>
        <AspectRatio ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.721892489824!2d74.60470631718637!3d42.857605135161926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb633eb4a865f%3A0xda48af2b2a2e4b59!2z0JLQtdGE0LAg0KbQtdC90YLRgA!5e0!3m2!1sru!2skg!4v1687976480903!5m2!1sru!2skg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </AspectRatio>
      </Container>
      <Contact2 />
    </div>
  );
}

export default ContactPage;
