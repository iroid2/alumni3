export enum UserRole {
  EMPLOYED = 'EMPLOYED',
  UNEMPLOYED = 'UNEMPLOYED',
  STUDENT = 'STUDENT'
}

export interface User {
  email: string | null;
  id: string;
  fullName: string | null;
  role: UserRole;
  isVerfied: boolean; // Note: This is still using the typo as per your previous data structure
  // Add any other properties your user object might have
}