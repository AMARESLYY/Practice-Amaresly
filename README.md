
# Practice Pinterest Clone

This project is a social profile platform built with Next.js 14 and Supabase. The UI is created using shadcn-ui and Tailwind CSS. The platform allows users to share projects with images or videos, similar to Pinterest. 

## Objectives

1. **User Authentication:**
   - Login and registration functionality.
   - Google & github OAuth functionality.
   - Edit profile details including username, bio, and profile picture.

2. **Project Management:**
   - Upload projects with title, description, image or video.
   - Edit existing projects.
   - Delete projects.

3. **User Interaction:**
   - Like other users' projects.
   - Comment on other users' projects.

4. **Social Features:**
   - Follow other users to see their projects in your feed.
   - Share projects via social media or direct link.

5. **Project Discovery:**
   - Search for projects by keywords.
   - Browse projects by categories or tags.
   - View trending projects based on likes and comments.

7. **Responsive Design:**
   - Ensure the platform is fully responsive and works on all devices.
   - Optimize performance for mobile users.

8. **Accessibility:**
   - Implement accessibility best practices to make the platform usable for everyone.
   - Provide alternative text for images and videos.

10. **Admin Dashboard:**
    - Admin panel for managing users and content.
    - Monitor user activity and manage reported content.

## Technologies Used

- **Next.js 14**: Framework for building server-side rendered React applications.
- **Supabase**: Backend as a service providing authentication, database, and storage.
- **shadcn-ui**: UI components library.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/social-profile-project.git
   ```
2. Navigate to the project directory:
   ```
   cd social-profile-project
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables by creating a .env.local file and adding your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribution Guidelines

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [shadcn-ui](https://github.com/shadcn/ui)
- [Tailwind CSS](https://tailwindcss.com/)

---

Happy coding!
