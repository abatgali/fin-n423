import React from "react";
import Image from "next/image";
import { Segment, Container, Header } from 'semantic-ui-react';

export default function Banner({ image, title, description }) {
  return (
    <Segment
        textAlign='center'
        style={{ 
            minHeight: 300, 
            padding: '1em 0em', 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center center',    
            width: '100%',
        }}
        vertical
    >
      <Container text>
        <Header
          as='h3'
          content={description}
          style={{
            fontSize: '1.7em',
            color: 'white',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as='h1'
          content={title}
          style={{
            fontSize: '4em',
            color: 'white',
            fontWeight: 'bolder',
            marginBottom: 0,
            marginTop: '0.5em',
          }}
        />
      </Container>
    </Segment>
  );
}