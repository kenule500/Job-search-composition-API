export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: [];
  preferredQualifications: [];
  description: [];
  dateAdded: string;
}
export interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
