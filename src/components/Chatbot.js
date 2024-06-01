import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#854CE6',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#854CE6',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'What number am I thinking of?',
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: 1, label: 'Number 1', trigger: '6' },
        { value: 2, label: 'Number 2', trigger: '7' },
        { value: 3, label: 'Number 3', trigger: '7' },
      ],
    },
    {
      id: '6',
      message: 'Awesome! You are a telepath!',
      trigger: '8',
    },
    {
      id: '7',
      message: 'Wrong answer, try again.',
      trigger: '5',
    },
    {
      id: '8',
      message: 'Where are you from?',
      trigger: '9',
    },
    {
      id: '9',
      user: true,
      trigger: '10',
    },
    {
      id: '10',
      message: '{previousValue} is a beautiful place!',
      trigger: '11',
    },
    {
      id: '11',
      message: 'Do you like coding?',
      trigger: '12',
    },
    {
      id: '12',
      options: [
        { value: 'yes', label: 'Yes', trigger: '13' },
        { value: 'no', label: 'No', trigger: '14' },
      ],
    },
    {
      id: '13',
      message: 'That\'s great to hear!',
      trigger: '15',
    },
    {
      id: '14',
      message: 'Oh, that\'s unfortunate. Maybe you just need to find the right language!',
      trigger: '15',
    },
    {
      id: '15',
      message: 'What is your favorite programming language?',
      trigger: '16',
    },
    {
      id: '16',
      user: true,
      trigger: '17',
    },
    {
      id: '17',
      message: '{previousValue} is a great choice!',
      trigger: '18',
    },
    {
      id: '18',
      message: 'Do you prefer working on the front-end or back-end?',
      trigger: '19',
    },
    {
      id: '19',
      options: [
        { value: 'front-end', label: 'Front-end', trigger: '20' },
        { value: 'back-end', label: 'Back-end', trigger: '21' },
        { value: 'full-stack', label: 'Full-stack', trigger: '22' },
      ],
    },
    {
      id: '20',
      message: 'Front-end development is really creative!',
      trigger: '23',
    },
    {
      id: '21',
      message: 'Back-end development is so powerful!',
      trigger: '23',
    },
    {
      id: '22',
      message: 'Full-stack development gives you the best of both worlds!',
      trigger: '23',
    },
    {
      id: '23',
      message: 'What is your favorite development tool?',
      trigger: '24',
    },
    {
      id: '24',
      user: true,
      trigger: '25',
    },
    {
      id: '25',
      message: '{previousValue} is really popular!',
      trigger: '26',
    },
    {
      id: '26',
      message: 'Do you work better in the morning or at night?',
      trigger: '27',
    },
    {
      id: '27',
      options: [
        { value: 'morning', label: 'Morning', trigger: '28' },
        { value: 'night', label: 'Night', trigger: '29' },
      ],
    },
    {
      id: '28',
      message: 'Morning productivity is amazing!',
      trigger: '30',
    },
    {
      id: '29',
      message: 'Night owls get things done too!',
      trigger: '30',
    },
    {
      id: '30',
      message: 'Do you like working remotely?',
      trigger: '31',
    },
    {
      id: '31',
      options: [
        { value: 'yes', label: 'Yes', trigger: '32' },
        { value: 'no', label: 'No', trigger: '33' },
      ],
    },
    {
      id: '32',
      message: 'Remote work can be very flexible!',
      trigger: '34',
    },
    {
      id: '33',
      message: 'Working in an office has its perks!',
      trigger: '34',
    },
    {
      id: '34',
      message: 'Do you enjoy working in teams?',
      trigger: '35',
    },
    {
      id: '35',
      options: [
        { value: 'yes', label: 'Yes', trigger: '36' },
        { value: 'no', label: 'No', trigger: '37' },
      ],
    },
    {
      id: '36',
      message: 'Team collaboration is important!',
      trigger: '38',
    },
    {
      id: '37',
      message: 'Working solo can be very focused!',
      trigger: '38',
    },
    {
      id: '38',
      message: 'What is your dream job?',
      trigger: '39',
    },
    {
      id: '39',
      user: true,
      trigger: '40',
    },
    {
      id: '40',
      message: '{previousValue} sounds like an awesome job!',
      trigger: '41',
    },
    {
      id: '41',
      message: 'Do you like learning new technologies?',
      trigger: '42',
    },
    {
      id: '42',
      options: [
        { value: 'yes', label: 'Yes', trigger: '43' },
        { value: 'no', label: 'No', trigger: '44' },
      ],
    },
    {
      id: '43',
      message: 'That\'s the spirit of a true developer!',
      trigger: '45',
    },
    {
      id: '44',
      message: 'It\'s okay, sometimes stability is key.',
      trigger: '45',
    },
    {
      id: '45',
      message: 'Do you prefer reading books or watching tutorials?',
      trigger: '46',
    },
    {
      id: '46',
      options: [
        { value: 'books', label: 'Books', trigger: '47' },
        { value: 'tutorials', label: 'Tutorials', trigger: '48' },
      ],
    },
    {
      id: '47',
      message: 'Books are a great way to learn in-depth!',
      trigger: '49',
    },
    {
      id: '48',
      message: 'Tutorials are great for hands-on learning!',
      trigger: '49',
    },
    {
      id: '49',
      message: 'Do you follow any tech blogs?',
      trigger: '50',
    },
    {
      id: '50',
      options: [
        { value: 'yes', label: 'Yes', trigger: '51' },
        { value: 'no', label: 'No', trigger: '52' },
      ],
    },
    {
      id: '51',
      message: 'Tech blogs are a great source of knowledge!',
      end: true,
    },
    {
      id: '52',
      message: 'You should check some out, they can be very informative!',
      end: true,
    }
  ]}
  floating ={true}
/>
</ThemeProvider>
  )
}

export default Chatbot;
