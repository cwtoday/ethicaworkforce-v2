export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'nurse' | 'nurse_agent' | 'hospital' | 'hospital_agent' | 'admin';
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          role?: 'nurse' | 'nurse_agent' | 'hospital' | 'hospital_agent' | 'admin';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'nurse' | 'nurse_agent' | 'hospital' | 'hospital_agent' | 'admin';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      nurses: {
        Row: {
          id: string;
          user_id: string;
          status: 'enquiry' | 'learning' | 'visa_interview' | 'placement' | 'completed';
          progress: number;
          country: string;
          specialization: string;
          experience: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          status?: 'enquiry' | 'learning' | 'visa_interview' | 'placement' | 'completed';
          progress?: number;
          country?: string;
          specialization?: string;
          experience?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          status?: 'enquiry' | 'learning' | 'visa_interview' | 'placement' | 'completed';
          progress?: number;
          country?: string;
          specialization?: string;
          experience?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      hospitals: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          location: string;
          description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          location?: string;
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          location?: string;
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      positions: {
        Row: {
          id: string;
          hospital_id: string;
          title: string;
          department: string;
          location: string;
          salary: string;
          requirements: string[];
          status: 'open' | 'filled' | 'closed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          hospital_id: string;
          title: string;
          department?: string;
          location?: string;
          salary?: string;
          requirements?: string[];
          status?: 'open' | 'filled' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          hospital_id?: string;
          title?: string;
          department?: string;
          location?: string;
          salary?: string;
          requirements?: string[];
          status?: 'open' | 'filled' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          nurse_id: string;
          title: string;
          description: string;
          due_date: string | null;
          completed: boolean;
          priority: 'high' | 'medium' | 'low';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          nurse_id: string;
          title: string;
          description?: string;
          due_date?: string | null;
          completed?: boolean;
          priority?: 'high' | 'medium' | 'low';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nurse_id?: string;
          title?: string;
          description?: string;
          due_date?: string | null;
          completed?: boolean;
          priority?: 'high' | 'medium' | 'low';
          created_at?: string;
          updated_at?: string;
        };
      };
      documents: {
        Row: {
          id: string;
          nurse_id: string;
          name: string;
          type: string;
          status: 'pending' | 'approved' | 'rejected';
          file_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          nurse_id: string;
          name: string;
          type?: string;
          status?: 'pending' | 'approved' | 'rejected';
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nurse_id?: string;
          name?: string;
          type?: string;
          status?: 'pending' | 'approved' | 'rejected';
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

export type User = {
  id: string;
  email: string;
  name: string;
  role: 'nurse' | 'hospital' | 'admin' | 'nurse_agent' | 'hospital_agent';
  avatar_url?: string | null;
};