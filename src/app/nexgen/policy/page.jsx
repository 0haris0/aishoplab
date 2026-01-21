'use client';

import React from 'react';
import Container from '@/components/Container';

const NexGenPolicy = () => {
    return (
        <div className="text-black py-12 bg-gray-50">
            <Container>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">

                    {/* Header Section */}
                    <div className="border-b pb-6 mb-6">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">
                            NexGen - Privacy Policy
                        </h1>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p><span className="font-semibold">Last updated:</span> {new Date().getFullYear()}</p>
                            <p>
                                <span className="font-semibold">Contact Email:</span>{' '}
                                <a href="mailto:policy@aishoplab.com" className="text-blue-600 hover:underline">
                                    policy@aishoplab.com
                                </a>
                            </p>
                            <p><span className="font-semibold">Address:</span> Tešanjska 1, 71000 Sarajevo, Bosnia and Herzegovina</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 text-gray-700 leading-relaxed">

                        <section>
                            <p>
                                <strong>NexGen</strong> (the &quot;App&quot;) provides product enhancement, optimization, and analytics services (the &quot;Service&quot;) to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information the App Collects</h2>
                            <p className="mb-3">When you install the App, we are automatically able to access certain types of information from your Shopify account:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Store Information:</strong> Store name, email address, and other identifiers.</li>
                                <li><strong>Product Data:</strong> Product titles, descriptions, images, and analytics data.</li>
                                <li><strong>Order Data:</strong> Information regarding orders as needed for App features and functionalities.</li>
                                <li><strong>Customer Data:</strong> Information regarding customers where applicable and authorized.</li>
                            </ul>

                            <p className="mb-3">Additionally, we collect the following types of personal information from you and/or your customers once you have installed the App:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Usage Data:</strong> Information about how you interact with the App, such as actions taken, pages viewed, and features used.</li>
                                <li><strong>Device Information:</strong> Information about the device you use to access the App, such as your IP address, web browser details, time zone, and operating system.</li>
                            </ul>

                            <p className="mb-3">We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>“Cookies”</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.allaboutcookies.org</a>.</li>
                                <li><strong>“Log files”</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">How Do We Use Your Personal Information?</h2>
                            <p className="mb-3">We use the personal information we collect from you and your customers in order to provide the Service and to operate the App. Additionally, we use this personal information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>App Functionality:</strong> To provide product enhancement, AI optimization, and analytics features.</li>
                                <li><strong>App Improvements:</strong> To analyze usage patterns, monitor app performance, and implement updates.</li>
                                <li><strong>Customer Support:</strong> To communicate with you and address support inquiries.</li>
                                <li><strong>Compliance:</strong> To comply with applicable laws and regulations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sharing Your Personal Information</h2>
                            <p className="mb-3">We may share your Personal Information with third parties to help us use your Personal Information, as described above. For example:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Service Providers:</strong> We work with third-party partners to provide core features, such as AI optimization services and data analysis tools.</li>
                            </ul>
                            <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights (For European Residents)</h2>
                            <p className="mb-3">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
                            <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                            <p>We will maintain the information collected for our records for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless and until you ask us to delete this information. We may also retain certain information for compliance, auditing, or other legal obligations.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes</h2>
                            <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-md border border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <p className="mb-4">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:policy@aishoplab.com" className="text-blue-600 hover:underline">policy@aishoplab.com</a> or by mail using the details provided below:</p>

                            <div className="font-medium text-gray-800">
                                <p>Ai Shop Lab</p>
                                <p>Tešanjska 1,</p>
                                <p>Sarajevo 71000,</p>
                                <p>Bosnia and Herzegovina</p>
                            </div>
                        </section>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NexGenPolicy;
