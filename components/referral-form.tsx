"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ReferralForm() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/xdknjppv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        event.currentTarget.reset()
      } else {
        throw new Error("Failed to submit the form. Please try again.")
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Refer Someone Now</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Refer a Friend or Family Member</DialogTitle>
            <DialogDescription>
              Fill out this form to refer someone who needs our services and earn a 10% commission when they complete
              their first service.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="space-y-4 py-4">
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Thank you for your referral! We'll contact them soon and keep you updated on your commission once
                  their service is complete.
                </AlertDescription>
              </Alert>
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    setOpen(false)
                    setSubmitted(false)
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="referrerName">Your Name *</Label>
                <Input id="referrerName" name="referrerName" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referrerContact">Your Email or Phone</Label>
                <Input id="referrerContact" name="referrerContact" placeholder="Optional" />
                <p className="text-sm text-muted-foreground">So we can update you on your referral status</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referredName">Referred Person's Name *</Label>
                <Input id="referredName" name="referredName" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referredContact">Their Email or Phone *</Label>
                <Input id="referredContact" name="referredContact" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceNeeded">Service They Need (Optional)</Label>
                <select id="serviceNeeded" name="serviceNeeded" className="w-full px-3 py-2 border rounded-md">
                  <option value="">Select a service</option>
                  <option value="repair">Electrical Repair</option>
                  <option value="installation">Installation</option>
                  <option value="inspection">Safety Inspection</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="upgrade">Electrical Upgrade</option>
                  <option value="commercial">Commercial Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Any additional details about the referral..."
                  rows={3}
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <input type="hidden" name="form-type" value="referral" />

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Referral"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
