'use client';

import React from 'react';
import Container from '@/components/Container';

const NexGenPolicy = () => {
    return (
        <div className="text-black py-12 bg-gray-50">
            <Container>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm font-sans">

                    {/* TITLE & INTRO */}
                    <div className="mb-8 border-b pb-6">
                        <h1 className="text-3xl font-bold mb-6 text-gray-900">
                            NexGen Privacy Policy
                        </h1>
                        <p className="mb-4 text-gray-700">
                            <strong>NexGen</strong> (&quot;the App&quot;) provides product enhancement, optimization, and analytics services (&quot;the Service&quot;) to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed">

                        {/* SECTION: Personal Information the App Collects */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Personal Information the App Collects</h2>

                            <p className="mb-3">When you install the App, we are automatically able to access certain types of information from your Shopify account:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Store Information:</strong> Store name, email address, and other identifiers.</li>
                                <li><strong>Product Data:</strong> Product titles, descriptions, images, and analytics data.</li>
                                <li><strong>Order Data:</strong> Information regarding orders as needed for App features and functionalities.</li>
                                <li><strong>Customer Data:</strong> Information regarding customers where applicable and authorized.</li>
                            </ul>

                            <p className="mb-3">Additionally, we collect the following types of personal information from you and/or your customers once you have installed the App:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Information about you and others who may access the App on behalf of your store, such as your name, address, email address, phone number, and billing information.</li>
                                <li>Information about individuals who visit your store, such as their IP address, web browser details, time zone, and information about the cookies installed on the particular device.</li>
                                <li>Information about how you interact with the App, such as actions taken, pages viewed, and features used.</li>
                            </ul>

                            <p className="mb-3">We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>“Cookies”</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.allaboutcookies.org</a>.</li>
                                <li><strong>“Log files”</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                            </ul>
                        </section>

                        {/* SECTION: How Do We Use Your Personal Information? */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">How Do We Use Your Personal Information?</h2>
                            <p className="mb-3">We use the personal information we collect from you and your customers in order to provide the Service and to operate the App. Additionally, we use this personal information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Communicate with you;</li>
                                <li>Optimize or improve the App;</li>
                                <li>Provide you with information or advertising relating to our products or services; and</li>
                                <li>Provide product enhancement, AI optimization, and analytics features.</li>
                            </ul>
                        </section>

                        {/* SECTION: Sharing Your Personal Information */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Sharing Your Personal Information</h2>
                            <p className="mb-3">We may share your Personal Information with third parties to help us use your Personal Information, as described above. For example:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>We work with third-party partners to provide core features, such as AI optimization services and data analysis tools.</li>
                            </ul>
                            <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                        </section>

                        {/* SECTION: Your Rights */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Your Rights</h2>
                            <p className="mb-3">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
                            <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>
                        </section>

                        {/* SECTION: Data Retention */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Data Retention</h2>
                            <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
                        </section>

                        {/* SECTION: Changes */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Changes</h2>
                            <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                        </section>

                        {/* SECTION: Contact Us */}
                        <section className="bg-gray-100 p-6 rounded-md mt-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Contact Us</h2>
                            <p className="mb-4">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:policy@aishoplab.com" className="text-blue-600 hover:underline">policy@aishoplab.com</a> or by mail using the details provided below:</p>

                            <div className="font-medium text-gray-800 not-italic">
                                <p>Ai Shop Lab</p>
                                <p>[Re: Privacy Compliance Officer]</p>
                                <p>Tešanjska 1, Sarajevo 71000, Bosnia and Herzegovina</p>
                            </div>
                        </section>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NexGenPolicy;
