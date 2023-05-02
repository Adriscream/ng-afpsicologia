export interface ProfessionalOffering {
  id: string;
  userId: string;
  name: string;
  description: string;
  specialties: string[];
  yearsOfExperience?: number;
  availability: {
    daysOfWeek: string[];
    startTime: string;
    endTime: string;
  };
  price: number;
  iva: 4 | 10 | 21;
}
