
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  supportType: string;
}

export function TransformationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    supportType: "individual"
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit to Web3Forms (Email Notification)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '3ca23ba3-c21b-4bf0-817a-10d1ace488ea',
          name: formData.name,
          email: formData.email,
          subject: `New Transformation Roadmap Request - ${getSupportTypeLabel(formData.supportType)}`,
          message: `Support Type: ${getSupportTypeLabel(formData.supportType)}\n\nFrom: ${formData.name} (${formData.email})`
        })
      });

      const result = await response.json();

      // If submission succeeds, redirect to thank you page
      if (result.success) {
        router.push('/thank-you');
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSupportTypeLabel = (type: string): string => {
    const labels: { [key: string]: string } = {
      individual: "Individual Coaching",
      corporate: "Corporate Culture Strategy",
      speaking: "Speaking & Workshops",
      relationship: "Relationship Coaching",
      book: "Book Study & Coaching"
    };
    return labels[type] || type;
  };

  return (
    <section id="transform" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Get Your Free{" "}
          <span className="gradient-text">
            Transformation
          </span>{" "}
          Roadmap
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Tell me about your situation and I'll send you personalized insights and resources to begin your healing journey.
        </p>
      </div>

      <div className="mx-auto max-w-[58rem]">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="support">What type of support interests you most?</Label>
                <Select value={formData.supportType} onValueChange={(value) => setFormData({ ...formData, supportType: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Coaching</SelectItem>
                    <SelectItem value="corporate">Corporate Culture Strategy</SelectItem>
                    <SelectItem value="speaking">Speaking & Workshops</SelectItem>
                    <SelectItem value="relationship">Relationship Coaching</SelectItem>
                    <SelectItem value="book">Book Study & Coaching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" className="w-full sm:w-auto bg-jw-burgundy hover:bg-jw-rust" size="lg" disabled={loading}>
                  {loading ? "Submitting..." : "Get My Free Transformation Roadmap →"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
