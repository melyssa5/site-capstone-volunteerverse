import { db } from "../db";
import { ExpressError } from "../utils/errors";

interface VolunteerInfo {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    bio: string;
  }



export class Volunteer {


    /**
     * Fetch a volunteer in the database by email
     * @param email 
     */

    static async fetchVolunteerByEmail(email: string){
        const query = `SELECT * FROM volunteers WHERE email=$1`
        const result = await db.query(query, [email])
        
        if (result.rows.length === 0){
            return null
        }
        const volunteer = result.rows[0]
        return volunteer
    } 
    
    
    
    static async register(volunteerInfo: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    bio: string;
    skills: string[];
  }) {
    
  }
}
