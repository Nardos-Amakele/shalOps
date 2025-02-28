import ParticlesBackground from './components/ParticlesBackground';
import './globals.css';

export const metadata = {
  title: 'ShalOps - Digital Solutions Provider',
  description: 'Modern, responsive digital solutions for your business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="font-poppins">
      <ParticlesBackground /> 
        {children}</body>
    </html>
  );
}
