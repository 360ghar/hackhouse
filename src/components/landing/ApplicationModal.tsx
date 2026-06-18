import { useEffect, useState } from "react";
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
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Loader2, Send, CheckCircle, Phone } from "lucide-react";

// LinkedIn / URL field: auto-prepend https:// if the user omitted a protocol.
// This lets users type "linkedin.com/in/johndoe" without being rejected.
const linkedinField = z
  .string()
  .trim()
  .transform((val) => {
    if (val && !/^https?:\/\//i.test(val)) {
      return `https://${val}`;
    }
    return val;
  })
  .pipe(
    z
      .string()
      .url("Please enter a valid URL")
      .max(255, "URL must be less than 255 characters"),
  )
  .optional()
  .or(z.literal(""));

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
  linkedin: linkedinField,
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

const BUILDING_MAX = 500;
const REASON_MAX = 1000;

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  // Watched values for character counters.
  const buildingValue = watch("building") ?? "";
  const reasonValue = watch("reason") ?? "";

  // Reset the form once the modal has finished closing so reopening always
  // shows a fresh form (no success-state flicker). Running this in an effect
  // tied to `isOpen` is more reliable than a setTimeout inside handleClose,
  // which could race with a quick reopen.
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        reset();
        setIsSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);

    // Simulate API call (no backend on this static site).
    // data is logged for demo; no backend in this static site — do NOT send anywhere.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    void data;

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast.success("Application Submitted! 🎉", {
      description: "We'll get back to you within 48 hours.",
    });
  };

  const handleClose = () => {
    onClose();
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
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                <span>Or call us: </span>
                <a href="tel:+919999900876" className="text-primary hover:underline font-medium">+91-9999900876</a>
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder="John Doe"
                  className="bg-secondary border-border"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  className="bg-secondary border-border"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="building">What are you building? *</Label>
                <Textarea
                  id="building"
                  placeholder="Tell us about your startup, side project, or what you're working on..."
                  className="bg-secondary border-border min-h-[80px] resize-none"
                  maxLength={BUILDING_MAX}
                  aria-describedby={errors.building ? "building-error" : undefined}
                  aria-invalid={!!errors.building}
                  {...register("building")}
                />
                <div className="flex justify-end">
                  <span
                    className={cn(
                      "text-xs text-muted-foreground",
                      buildingValue.length >= BUILDING_MAX * 0.9 && "text-destructive",
                    )}
                  >
                    {buildingValue.length}/{BUILDING_MAX}
                  </span>
                </div>
                {errors.building && (
                  <p id="building-error" className="text-sm text-destructive">{errors.building.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn / Twitter / Portfolio URL</Label>
                <Input
                  id="linkedin"
                  autoComplete="url"
                  placeholder="https://linkedin.com/in/johndoe"
                  className="bg-secondary border-border"
                  aria-describedby={errors.linkedin ? "linkedin-error" : undefined}
                  aria-invalid={!!errors.linkedin}
                  {...register("linkedin")}
                />
                {errors.linkedin && (
                  <p id="linkedin-error" className="text-sm text-destructive">{errors.linkedin.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join HackHouse? *</Label>
                <Textarea
                  id="reason"
                  placeholder="What are you hoping to achieve? How would HackHouse help you?"
                  className="bg-secondary border-border min-h-[100px] resize-none"
                  maxLength={REASON_MAX}
                  aria-describedby={errors.reason ? "reason-error" : undefined}
                  aria-invalid={!!errors.reason}
                  {...register("reason")}
                />
                <div className="flex justify-end">
                  <span
                    className={cn(
                      "text-xs text-muted-foreground",
                      reasonValue.length >= REASON_MAX * 0.9 && "text-destructive",
                    )}
                  >
                    {reasonValue.length}/{REASON_MAX}
                  </span>
                </div>
                {errors.reason && (
                  <p id="reason-error" className="text-sm text-destructive">{errors.reason.message}</p>
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
