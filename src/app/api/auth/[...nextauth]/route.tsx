import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/app/libs/prismadb";


export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "admin@example.com"
                },
                password: { label: "Password", type: "password", placeholder: "enter your password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.log('Invalid Input');
                    return null;
                }
                const user = await prisma.admin.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) { 
                console.log('User not found');
                return null;
                }
                
                const isPasswordValid = await (credentials.password, user.password);
                 
                if (!isPasswordValid) { console.log('Password is invalid.'); 
                                         return null;}
                return {
                    id: user.adminId + "",
                    email: user.email,
                    name: user.username
                }


            },



        })

    ],
            callbacks:{
                
                session: ({session, token}) => {
                
                  console.log("Session callback", {session,token})
                  return{
                    ...session,
                    user: {
                      ...session.user,
         
                    }
                  }
                   
            },
                jwt: ({ token, user}) => {
                    console.log("JWT callback", {token, user});
                    if (user){
                        const u = prisma.admin.fields
                        return{
                            ...token,
                   
                        }
                       
                    }
                    
                    return token;
                },
                async redirect({ url: _url, baseUrl }) {
                return baseUrl + '/crud';
            }
            },
            pages: {
                signIn: '/artistlog',  // Specify the custom sign-in page
            }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST }