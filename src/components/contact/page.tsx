import ContactCard from "./card";
import { contacts } from "./contacts";

export default function ContactPage() {
  return (
    <div className="flex h-full w-full flex-col gap-2 py-4">
      <div className="flex flex-col gap-4">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} index={index} />
        ))}
      </div>
    </div>
  );
}
