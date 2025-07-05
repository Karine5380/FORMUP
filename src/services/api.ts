export interface Session {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  participants: number;
  maxParticipants: number;
  type: string;
  location: string;
  formateur: string;
  status: string;
  price: number;
  tags: string[];
}

export async function fetchSessions(): Promise<Session[]> {
  // In a real application, this would call the backend API.
  // Here we return a mocked response to illustrate the data flow.
  return Promise.resolve([
    {
      id: 1,
      title: 'Formation React Avancé',
      description: 'Approfondissement des concepts React avec hooks, context et performance',
      date: '2024-01-15',
      time: '09:00-12:00',
      duration: 180,
      participants: 15,
      maxParticipants: 20,
      type: 'présentiel',
      location: 'Salle A - Centre de formation',
      formateur: 'Marie Dubois',
      status: 'confirmed',
      price: 450,
      tags: ['React', 'JavaScript', 'Frontend'],
    },
  ]);
}
