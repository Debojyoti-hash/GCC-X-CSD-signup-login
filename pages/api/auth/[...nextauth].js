import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/database/connectDB';
import Users from '@/model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
    providers : [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        //GitHub Provider
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error=>{error:"Connection Failed!"})

                //Check user existance
                const result = await Users .findOne({email:credentials.email})
                if(!result){
                    throw new Error("No user with this email exists. Please signup")
                }

                //compare password
                const checkPassword = await compare(credentials.password, result.password);

                //Incorrect password
                if(checkPassword || result.email !== credentials.email){
                    throw new Error("Email or password doesn't exist");
                }

                return result;
            }
        }) 
    ]
})