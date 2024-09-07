'use server'

import EmailTemplate from "@/components/emails/email-template";
import db from "@/utils/db";
import bcrypt from "bcrypt";
import {Resend} from "resend";

export async function createUser(data:any) {
  const resend = new Resend(process.env.RESEND_API_KEY);

    console.log(`Data actions:`,data)
    const {email,
        fullName,
        gender,
        maritalStatus,
        password,
        role}=data

    try {
        const existingUser = await db.user.findUnique({
            where: {
              email,
            },
          });
        if(existingUser){
          console.log(`User Aready Exists:`, existingUser)
            return {
                data:null,
                status:404,
                error:`user with email ${email} already exists`,
                // messege:"use another email"
            }
        }
         // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    console.log(`User Token:`,userToken)
    const newUser = await db.user.create({
      data:{
        email,
        fullName,
        gender,
        maritalStatus,
        password:hashedPassword,
        role,
        token: userToken,
      }
    });
    console.log('User Created:', newUser)

     //Send an Email with the Token on the link as a search param
     const token = newUser.token;
     const userId = newUser.id;
     const firstName = newUser.fullName?.split(" ")[0];
     const linkText = "Verify your Account ";
     const message =
       "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
     const sendMail = await resend.emails.send({
       from: "LeticiaAlmuni <info@comedev.org>",
       to: newUser.email as string,
       subject: "Verify Your Email Address",
       react: EmailTemplate({ firstName, token, linkText, message }),
     });
     console.log(`Token Sent:`,token);
     console.log(`Email Sent:`,sendMail);
     console.log(newUser);

    return {
        data:newUser,
        error:null,
        status:201
    }
    } catch (error) {
        console.log(`Error from actions:`,error)
        return {
            data:null,
            error:error,
            status:409
        }
    }
}

export async function updateUserById(id:string) {
    try {
        const existingUser = await db.user.findUnique({
            where: {
             id,
            },
          });
        if(!existingUser){
          console.log(`No User Found:`, existingUser)
            return {
                data:null,
                status:404,
                error:`user with email ${id} does not exists`,
            }
        }
    const updatedUser = await db.user.update({
      where:{id},
      data:{
        isVerfied:true
      }
    });

    return {
        data:updatedUser,
        error:null,
        status:201
    }
    } catch (error) {
        console.log(`Error from actions:`,error)
        return {
            data:null,
            error:error,
            status:409
        }
    }
}

export async function getUserById(id:string) {
  try {
      const existingUser = await db.user.findUnique({
          where: {
           id,
          },
        });
      if(!existingUser){
        console.log(`No User Found:`, existingUser)
          return {
              data:null,
              status:404,
              error:`user with id ${id} does not exists`,
          }
      }
  const user = await db.user.findUnique(
    {
      where:{id}
    }
  );

  return {
      data:user,
      error:null,
      status:201
  }
  } catch (error) {
      console.log(`Error from actions:`,error)
      return {
          data:null,
          error:error,
          status:409
      }
  }
}