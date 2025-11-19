import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, BookOpen, Mic, Coffee } from "lucide-react";

export function Miscellaneous() {
  const items = [
    {
      icon: Award,
      title: "Certifications & Awards",
      items: [
        { name: "Certified Scrum Product Owner (CSPO)", year: "2023" },
        { name: "Product-Led Growth Certification", year: "2022" },
        { name: "'PM of the Year' Award at TechCorp", year: "2024" },
        { name: "Google Analytics Certification", year: "2021" }
      ]
    },
    {
      icon: Mic,
      title: "Speaking & Writing",
      items: [
        { name: "ProductCon 2024 Speaker - 'Building Products Users Love'", year: "2024" },
        { name: "Guest on 'Product Talk' Podcast", year: "2024" },
        { name: "Medium Articles - 50K+ readers", year: "2023-Present" },
        { name: "Workshop: Product Strategy for Startups", year: "2023" }
      ]
    },
    {
      icon: BookOpen,
      title: "Education",
      items: [
        { name: "MBA, Business Administration", year: "2019" },
        { name: "BS, Computer Science", year: "2017" },
        { name: "Product School Alumni", year: "2020" }
      ]
    },
    {
      icon: Coffee,
      title: "Interests & Hobbies",
      items: [
        { name: "Mentoring aspiring Product Managers", year: "10+ mentees" },
        { name: "Coffee enthusiast & home barista", year: "" },
        { name: "Hiking and outdoor photography", year: "" },
        { name: "Tech conference organizer", year: "" }
      ]
    }
  ];

  return (
    <section id="miscellaneous" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-slate-900">Beyond Work</h2>
          <div className="w-20 h-1 bg-blue-600"></div>
          <p className="text-slate-600">Certifications, speaking engagements, and things that make me, me</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start justify-between gap-4">
                      <span className="text-slate-700">{item.name}</span>
                      {item.year && (
                        <Badge variant="outline" className="flex-shrink-0">{item.year}</Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
