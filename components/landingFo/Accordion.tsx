import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="account-management">
          <AccordionTrigger>How do I update my account information?</AccordionTrigger>
          <AccordionContent>
            To update your account information, log in to the alumni portal and navigate to the "Profile" section. Here, you can edit your personal details, contact information, and privacy settings. Don't forget to save your changes before leaving the page.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="events">
          <AccordionTrigger>How can I find out about upcoming alumni events?</AccordionTrigger>
          <AccordionContent>
            Information about upcoming events can be found in several places:
            <ul className="list-disc list-inside mt-2">
              <li>The "Events" tab in the alumni portal</li>
              <li>Our monthly email newsletter</li>
              <li>The official alumni social media accounts</li>
              <li>The university's main website under the "Alumni" section</li>
            </ul>
            You can also set your event preferences in your account settings to receive personalized event recommendations.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="networking">
          <AccordionTrigger>What networking opportunities are available through the alumni network?</AccordionTrigger>
          <AccordionContent>
            Our alumni network offers various networking opportunities:
            <ul className="list-disc list-inside mt-2">
              <li>Alumni directory: Connect with fellow alumni from your year or field of study</li>
              <li>Mentorship program: Offer or receive career guidance</li>
              <li>Industry-specific groups: Join online forums or in-person meetups</li>
              <li>Networking events: Attend mixers, conferences, and reunions</li>
              <li>Job board: Post or find job opportunities within the alumni community</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="benefits">
          <AccordionTrigger>What benefits do I get as an alumnus/alumna?</AccordionTrigger>
          <AccordionContent>
            As an alumnus/alumna, you enjoy several benefits:
            <ul className="list-disc list-inside mt-2">
              <li>Lifelong email address</li>
              <li>Access to the university library and online resources</li>
              <li>Career services and job postings</li>
              <li>Discounts on further education and professional development courses</li>
              <li>Invitations to exclusive alumni events</li>
              <li>Subscription to the alumni magazine</li>
              <li>Discounts on university merchandise and local businesses</li>
            </ul>
            Log in to your alumni account to see a full list of current benefits.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="giving-back">
          <AccordionTrigger>How can I give back to the university as an alumnus/alumna?</AccordionTrigger>
          <AccordionContent>
            There are many ways to give back and support your alma mater:
            <ul className="list-disc list-inside mt-2">
              <li>Make a financial donation to support scholarships or specific programs</li>
              <li>Volunteer for alumni events or student mentoring programs</li>
              <li>Offer internships or job opportunities to current students and recent graduates</li>
              <li>Share your expertise as a guest speaker or workshop leader</li>
              <li>Participate in alumni interviews for prospective students</li>
              <li>Join your local alumni chapter and help organize events</li>
            </ul>
            Visit the "Give Back" section in the alumni portal for more information on current opportunities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}
