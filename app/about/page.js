import React from 'react';

const Page = () => {
  return (
    <>
      <div className="font-sans mx-16">
        <header className="py-6 text-center">
          <h1 className="text-4xl font-bold">Get Me A Chai</h1>
          <p className="mt-2 text-lg">Support Your Favorite Creators</p>
        </header>

        <main className="container mx-auto p-6 space-y-8">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-semibold">About Our Project</h2>
            <p className="mt-4 text-lg">
              Welcome to our Online Contribution Platform, where you can support your favorite creators, influencers, and artists by making online contributions. Whether you are looking to help them with a one-time donation or a recurring contribution, our platform makes it simple and secure to give back and show appreciation.
            </p>
          </section>

          {/* Key Features Section */}
          <section>
            <h2 className="text-3xl font-semibold">Key Features</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Razorpay Integration:</span>
                <p className="text-lg">Our platform is powered by Razorpay's comprehensive APIs, ensuring reliable and efficient payment processing for your contributions.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Customizable Donation Forms:</span>
                <p className="text-lg">You can personalize your donation experience with messages, amounts, and even set up recurring contributions to support your chosen creator continuously.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Creator Management:</span>
                <p className="text-lg">Creators can manage their profiles, track their donations, and customize their pages to connect with their supporters more effectively.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Donation Tracking:</span>
                <p className="text-lg">Donors can track their past contributions and see how they are helping creators grow and succeed.</p>
              </li>
             
            </ul>
          </section>

          {/* Technologies Used Section */}
          <section>
            <h2 className="text-3xl font-semibold">Technologies Used</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-lg">Frontend: Built with Next.js, offering dynamic, high-performance client-side rendering.</li>
              <li className="text-lg">Backend: Node.js with MongoDB ensures scalability and handles user requests efficiently.</li>
              <li className="text-lg">Styling: A modern UI design crafted using TailwindCSS for a responsive, elegant user experience.</li>
              <li className="text-lg">Payment Gateway: Razorpay API is used for secure and seamless donation functionalities.</li>
            </ul>
          </section>

          {/* How It Works Section */}
          <section>
            <h2 className="text-3xl font-semibold">How It Works</h2>
            <ol className="mt-4 space-y-4 list-decimal list-inside">
              <li className="text-lg">Initiate Donations: Supporters create a donation request by entering the amount and selecting the creator they wish to support.</li>
              <li className="text-lg">Process Donations: Donations are securely processed through Razorpay’s APIs, ensuring a smooth transaction process.</li>
              <li className="text-lg">Track Donations: Supporters can view their donation history and see how their contributions are making an impact.</li>
              <li className="text-lg">Profile Updates: Creators can manage their profiles and keep their supporters informed with updates about their projects and progress.</li>
            </ol>
          </section>

          {/* Why Choose Us Section */}
          <section>
            <h2 className="text-3xl font-semibold">Why Choose Us</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Security First:</span>
                <p className="text-lg">We prioritize the security of your data and donations with encrypted transactions and secure payment gateways.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">User-Friendly Design:</span>
                <p className="text-lg">Our platform is designed to be intuitive, making it easy for both creators and supporters to navigate and interact.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl font-semibold">Customizability:</span>
                <p className="text-lg">Supporters can personalize their donations, while creators can update their profiles to better connect with their audience.</p>
              </li>
            </ul>
          </section>

          {/* About the Developer Section */}
          <section>
            <h2 className="text-3xl font-semibold">About the Developer</h2>
            <p className="mt-4 text-lg">
              This project is brought to life by a dedicated web developer skilled in:
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li className="text-lg">Full-stack development utilizing the MERN stack.</li>
              <li className="text-lg">Integrating payment solutions and designing APIs for seamless user interactions.</li>
              <li className="text-lg">Creating innovative, user-friendly interfaces to improve engagement and user experience.</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

// either Static metadata
export const metadata = {
    title: "About - Get Me A Chai",
  }
