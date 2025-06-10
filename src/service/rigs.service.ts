import axios from "axios";
import type { Rig } from "../types/rigs.interface";



class RigsService {
    private readonly baseUrl = 'http://localhost:3000/server/mock';

    async getRig(): Promise<Rig | undefined> {
        try{
            console.log(`${this.baseUrl}${"/rig"}`);
            const response = await axios.get(`${this.baseUrl}${"/rig"}`);
            console.log(response.data);
            return response.data;
        }catch (error){
            console.log("error _> ", error);
        }
        
    }

    async getRigs(): Promise<Rig[]> {
        const response = await axios.get(`${this.baseUrl}${"/rigs"}`);
        console.log("response.data _> ", response.data.data);
        return response.data.data;
    }
}

export default new RigsService();