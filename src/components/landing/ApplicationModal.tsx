import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle } from "lucide-react";

const applicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  building: z
    .string()
    .trim()
    .min(10, "Please describe what you're building (at least 10 characters)")
    .max(500, "Description must be less than 500 characters"),
  linkedin: z
    .string()
    .trim()
    .url("Please enter a valid URL")
    .max(255, "URL must be less than 255 characters")
    .optional()
    .or(z.literal("")),
  reason: z
    .string()
    .trim()
    .min(20, "Please tell us more about why you want to join (at least 20 characters)")
    .max(1000, "Reason must be less than 1000 characters"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      building: "",
      linkedin: "",
      reason: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted! 🎉",
      description: "We'll get back to you within 48 hours.",
    });
  };

  const handleClose = () => {
    onClose();
    // Reset form after modal closes
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg glass border-border">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">
                Apply to <span className="text-gradient">HackHouse</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Join our curated community of builders. Takes less than 5 minutes.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-secondary border-border"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary border-border"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="building">What are you building? *</Label>
                <Textarea
                  id="building"
                  placeholder="Tell us about your startup, side project, or what you're working on..."
                  className="bg-secondary border-border min-h-[80px] resize-none"
                  {...register("building")}
                />
                {errors.building && (
                  <p className="text-sm text-destructive">{errors.building.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn / Twitter / Portfolio URL</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/johndoe"
                  className="bg-secondary border-border"
                  {...register("linkedin")}
                />
                {errors.linkedin && (
                  <p className="text-sm text-destructive">{errors.linkedin.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join HackHouse? *</Label>
                <Textarea
                  id="reason"
                  placeholder="What are you hoping to achieve? How would HackHouse help you?"
                  className="bg-secondary border-border min-h-[100px] resize-none"
                  {...register("reason")}
                />
                {errors.reason && (
                  <p className="text-sm text-destructive">{errors.reason.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 glow-primary font-heading"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">Application Received!</h3>
            <p className="text-muted-foreground mb-6">
              We'll review your application and get back to you within 48 hours.
            </p>
            <Button onClick={handleClose} variant="outline">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
