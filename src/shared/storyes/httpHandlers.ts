import { HttpResponse, http } from 'msw';

export const httpHandlers = [
  http.get('https://api.flashcards.andrii.es/v1/auth/me', () => {
    console.log('geeeeeeeeeeeeeeeeeeeeeeeet');

    return HttpResponse.json({
      avatar:
        'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8fe3aca5-d273-4122-b041-a4a2b9db8372_404.png',
      created: '2024-05-07T16:54:31.932Z',
      email: 'qw@qw.qw',
      id: 'fbbd0d16-b76b-4592-becb-eaba1306fc46',
      isEmailVerified: false,
      name: 'Nemo',
      updated: '2024-05-30T20:21:09.506Z',
    });
  }),
  http.patch('https://api.flashcards.andrii.es/v1/auth/me', () => {
    return HttpResponse.json({
      avatar:
        'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8fe3aca5-d273-4122-b041-a4a2b9db8372_404.png',
      created: '2024-06-02T09:46:00.621Z',
      email: 'qw@qw.qw',
      id: 'string',
      isEmailVerified: true,
      name: 'Nemo',
      updated: '2024-06-02T09:46:00.621Z',
    });
  }),
];
