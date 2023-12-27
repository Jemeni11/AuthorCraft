export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Chapters: {
        Row: {
          chapter_name: string;
          chapter_order_in_story: number;
          chapter_text: string;
          created_at: string;
          id: string;
          story_id: string;
          updated_at: string;
        };
        Insert: {
          chapter_name: string;
          chapter_order_in_story: number;
          chapter_text: string;
          created_at?: string;
          id?: string;
          story_id: string;
          updated_at: string;
        };
        Update: {
          chapter_name?: string;
          chapter_order_in_story?: number;
          chapter_text?: string;
          created_at?: string;
          id?: string;
          story_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Chapters_story_id_fkey";
            columns: ["story_id"];
            referencedRelation: "Workshop";
            referencedColumns: ["work_id"];
          },
        ];
      };
      Workshop: {
        Row: {
          date_created: string;
          date_updated: string;
          summary: string;
          user_id: string;
          work_id: string;
          work_name: string;
        };
        Insert: {
          date_created?: string;
          date_updated: string;
          summary: string;
          user_id: string;
          work_id?: string;
          work_name: string;
        };
        Update: {
          date_created?: string;
          date_updated?: string;
          summary?: string;
          user_id?: string;
          work_id?: string;
          work_name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
