'use client';

import React, { useState, useSyncExternalStore } from 'react';
import {
  Gift,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MapPin,
  User,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { TrialFormData, FormValidationErrors, DeliveryHub } from '@/types/trial';
import {
  validateFullName,
  validateMobile,
  validateDeliveryArea,
  validateDeliveryDate,
  getTomorrowDateString,
  getMaxDateString,
} from '@/utils/validation';

const emptySubscribe = () => () => {};

export function TrialFormSection() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const minDate = isClient ? getTomorrowDateString() : '';
  const maxDate = isClient ? getMaxDateString(14) : '';

  const [formData, setFormData] = useState<TrialFormData>({
    fullName: '',
    mobile: '',
    deliveryArea: '',
    foodPreference: 'veg',
    deliveryDate: '',
    customAreaNotes: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isWaitlistSubmission, setIsWaitlistSubmission] = useState(false);

  const isOutOfArea = formData.deliveryArea === 'other';

  const handleInputChange = (
    field: keyof TrialFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field-specific error as user edits
    if (errors[field as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormValidationErrors = {};

    const nameErr = validateFullName(formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const mobileErr = validateMobile(formData.mobile);
    if (mobileErr) newErrors.mobile = mobileErr;

    const areaErr = validateDeliveryArea(formData.deliveryArea);
    if (areaErr) newErrors.deliveryArea = areaErr;

    // Only validate delivery date if within supported areas
    if (!isOutOfArea) {
      const dateErr = validateDeliveryDate(formData.deliveryDate || minDate);
      if (dateErr) newErrors.deliveryDate = dateErr;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!formData.deliveryDate && minDate) {
      setFormData((prev) => ({ ...prev, deliveryDate: minDate }));
    }

    setIsSubmitting(true);
    setIsWaitlistSubmission(isOutOfArea);

    // Simulate 1200ms network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(true);
    }, 1200);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Reset form after submission
    setFormData({
      fullName: '',
      mobile: '',
      deliveryArea: '',
      foodPreference: 'veg',
      deliveryDate: '',
      customAreaNotes: '',
    });
    setErrors({});
  };

  return (
    <section id="trial-form" className="py-16 sm:py-20 lg:py-28 relative">
      <Container size="narrow">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <Badge variant="kicker">FREE TRIAL</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F32] tracking-tight">
            Claim Your Free Trial Meal
          </h2>
          <p className="text-base sm:text-lg text-[#334A40] max-w-lg font-medium">
            No credit card required. 100% free freshly cooked lunch or dinner bowl
            delivered to your home or office.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-[#E3D8C4] shadow-xl relative overflow-hidden">
          {/* Top Decorative Trust Strip */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E3D8C4]/70">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#F47738]" />
              <span className="text-xs sm:text-sm font-extrabold text-[#173F32]">
                1 Free Trial Per Customer
              </span>
            </div>
            <span className="text-xs text-[#63786F] font-semibold">
              Mon – Sat Deliveries Only
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field 1: Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-[#F47738]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#63786F] pointer-events-none" />
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="e.g. Karan Mehta"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-white border text-[#173F32] placeholder-[#63786F] focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-[#DC2626] focus:ring-[#DC2626]/20 bg-[#FEF2F2]'
                      : 'border-[#E3D8C4] focus:border-[#F47738] focus:ring-[#F47738]/20'
                  }`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.fullName && (
                <p className="flex items-center gap-1.5 text-xs text-[#DC2626] font-semibold mt-1.5 pl-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Field 2: Mobile Number (with locked +91 prefix) */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-2"
              >
                Mobile Number <span className="text-[#F47738]">*</span>
              </label>
              <div className="relative flex rounded-xl border border-[#E3D8C4] overflow-hidden focus-within:border-[#F47738] focus-within:ring-2 focus-within:ring-[#F47738]/20 transition-all">
                {/* Locked +91 Addon */}
                <span className="inline-flex items-center gap-1 px-3.5 bg-[#FFF7E8] text-[#173F32] text-xs sm:text-sm font-extrabold border-r border-[#E3D8C4] select-none">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </span>
                <input
                  id="mobile"
                  type="tel"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={(e) =>
                    handleInputChange(
                      'mobile',
                      e.target.value.replace(/\D/g, '')
                    )
                  }
                  placeholder="98201 98201"
                  className={`flex-1 px-4 py-3.5 text-sm bg-white text-[#173F32] placeholder-[#63786F] focus:outline-none ${
                    errors.mobile ? 'bg-[#FEF2F2]' : ''
                  }`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.mobile && (
                <p className="flex items-center gap-1.5 text-xs text-[#DC2626] font-semibold mt-1.5 pl-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.mobile}</span>
                </p>
              )}
            </div>

            {/* Field 3: Delivery Area Dropdown */}
            <div>
              <label
                htmlFor="deliveryArea"
                className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-2"
              >
                Delivery Area (Mumbai) <span className="text-[#F47738]">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#63786F] pointer-events-none" />
                <select
                  id="deliveryArea"
                  value={formData.deliveryArea}
                  onChange={(e) =>
                    handleInputChange(
                      'deliveryArea',
                      e.target.value as DeliveryHub
                    )
                  }
                  className={`w-full pl-11 pr-10 py-3.5 rounded-xl text-sm bg-white border text-[#173F32] focus:outline-none focus:ring-2 appearance-none transition-all cursor-pointer ${
                    errors.deliveryArea
                      ? 'border-[#DC2626] focus:ring-[#DC2626]/20 bg-[#FEF2F2]'
                      : 'border-[#E3D8C4] focus:border-[#F47738] focus:ring-[#F47738]/20'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="" disabled>
                    Select your delivery neighborhood
                  </option>
                  <option value="andheri">Andheri (East / West / SEEPZ)</option>
                  <option value="bandra">Bandra (West / BKC)</option>
                  <option value="powai">Powai (Hiranandani / IIT Area)</option>
                  <option value="lower-parel">
                    Lower Parel (One World / Kamala Mills / Worli)
                  </option>
                  <option value="other">
                    Other (Outside Mumbai Pilot Zones)
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#63786F]">
                  ▼
                </div>
              </div>
              {errors.deliveryArea && (
                <p className="flex items-center gap-1.5 text-xs text-[#DC2626] font-semibold mt-1.5 pl-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.deliveryArea}</span>
                </p>
              )}
            </div>

            {/* Out-of-Area Notice */}
            {isOutOfArea && (
              <div className="p-4 rounded-2xl bg-[#FFF7E8] border border-[#F47738]/40 text-left space-y-2 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-[#F47738] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-[#173F32]">
                      Outside our pilot delivery areas
                    </h4>
                    <p className="text-xs text-[#334A40] leading-relaxed mt-0.5">
                      We currently deliver only in <strong>Andheri, Bandra, Powai, and Lower Parel</strong>.
                      Joining our expansion waitlist helps us prioritize your neighborhood next!
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <label
                    htmlFor="customAreaNotes"
                    className="block text-[11px] font-bold text-[#63786F] uppercase tracking-wider mb-1"
                  >
                    Your Neighborhood / Pin Code (Optional)
                  </label>
                  <input
                    id="customAreaNotes"
                    type="text"
                    value={formData.customAreaNotes || ''}
                    onChange={(e) =>
                      handleInputChange('customAreaNotes', e.target.value)
                    }
                    placeholder="e.g. Malad West, 400064"
                    className="w-full px-4 py-2.5 rounded-lg text-xs bg-white border border-[#E3D8C4] text-[#173F32] placeholder-[#63786F] focus:outline-none focus:border-[#F47738]"
                  />
                </div>
              </div>
            )}

            {/* Field 4: Food Preference (Veg vs. Non-Veg) */}
            <div>
              <label className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-2">
                Meal Preference <span className="text-[#F47738]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('foodPreference', 'veg')}
                  className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${
                    formData.foodPreference === 'veg'
                      ? 'border-[#2E7D32] bg-[#E8F5E9] text-[#1B5E20] shadow-xs'
                      : 'border-[#E3D8C4] bg-white text-[#334A40] hover:border-[#173F32]'
                  }`}
                  disabled={isSubmitting}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
                  <span>Vegetarian</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('foodPreference', 'non-veg')}
                  className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${
                    formData.foodPreference === 'non-veg'
                      ? 'border-[#C2410C] bg-[#FFEDD5] text-[#9A3412] shadow-xs'
                      : 'border-[#E3D8C4] bg-white text-[#334A40] hover:border-[#173F32]'
                  }`}
                  disabled={isSubmitting}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C]" />
                  <span>Non-Vegetarian</span>
                </button>
              </div>
            </div>

            {/* Field 5: Preferred Delivery Date (Hidden if Out of Area) */}
            {!isOutOfArea && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="deliveryDate"
                    className="block text-xs font-bold text-[#173F32] uppercase tracking-wider"
                  >
                    Preferred Date (Mon–Sat) <span className="text-[#F47738]">*</span>
                  </label>
                  <span className="text-[11px] font-semibold text-[#63786F]">
                    No deliveries on Sundays
                  </span>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#63786F] pointer-events-none" />
                  <input
                    id="deliveryDate"
                    type="date"
                    min={minDate}
                    max={maxDate}
                    value={formData.deliveryDate || minDate}
                    onChange={(e) =>
                      handleInputChange('deliveryDate', e.target.value)
                    }
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-white border text-[#173F32] focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.deliveryDate
                        ? 'border-[#DC2626] focus:ring-[#DC2626]/20 bg-[#FEF2F2]'
                        : 'border-[#E3D8C4] focus:border-[#F47738] focus:ring-[#F47738]/20'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.deliveryDate && (
                  <p className="flex items-center gap-1.5 text-xs text-[#DC2626] font-semibold mt-1.5 pl-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.deliveryDate}</span>
                  </p>
                )}
              </div>
            )}

            {/* Submit CTA Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                isLoading={isSubmitting}
                className="w-full justify-center group"
              >
                <span>
                  {isOutOfArea
                    ? 'Join Expansion Waitlist'
                    : 'Book My Free Trial'}
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-center text-xs text-[#63786F] font-medium mt-3">
                🔒 Zero credit card needed. No hidden charges.
              </p>
            </div>
          </form>
        </div>
      </Container>

      {/* Confirmation Modal with Honest Demo Disclaimer */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col items-center text-center">
          {/* Animated Success Badge */}
          <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mb-4 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black text-[#173F32] mb-1">
            {isWaitlistSubmission ? 'Added to Priority Waitlist! 📬' : 'Free Trial Confirmed! 🎉'}
          </h3>
          <p className="text-sm text-[#334A40] mb-6 font-medium">
            {isWaitlistSubmission
              ? 'Thank you for expressing interest in FitBowl expansion.'
              : 'Your gourmet trial bowl is scheduled for fresh morning preparation.'}
          </p>

          {/* Booking Summary Box */}
          <div className="w-full bg-[#FFF7E8] rounded-2xl p-4 sm:p-5 border border-[#E3D8C4] text-left space-y-2 mb-6 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-[#E3D8C4]/60 pb-1.5">
              <span className="text-[#63786F] font-bold">Recipient:</span>
              <span className="font-extrabold text-[#173F32]">{formData.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-[#E3D8C4]/60 pb-1.5">
              <span className="text-[#63786F] font-bold">Mobile:</span>
              <span className="font-extrabold text-[#173F32]">+91 {formData.mobile}</span>
            </div>
            <div className="flex justify-between border-b border-[#E3D8C4]/60 pb-1.5">
              <span className="text-[#63786F] font-bold">Area:</span>
              <span className="font-extrabold text-[#173F32] capitalize">
                {formData.deliveryArea} {formData.customAreaNotes ? `(${formData.customAreaNotes})` : ''}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#E3D8C4]/60 pb-1.5">
              <span className="text-[#63786F] font-bold">Dietary:</span>
              <span className="font-extrabold text-[#173F32] capitalize">
                {formData.foodPreference}
              </span>
            </div>
            {!isWaitlistSubmission && (
              <div className="flex justify-between pt-0.5">
                <span className="text-[#63786F] font-bold">Scheduled Date:</span>
                <span className="font-extrabold text-[#F47738]">
                  {formData.deliveryDate || minDate}
                </span>
              </div>
            )}
          </div>

          {/* Mandatory Transparent Demo Disclaimer */}
          <div className="w-full p-3 rounded-xl bg-[#FEF3C7] border border-[#FCD34D] text-left flex items-start gap-2.5 mb-6">
            <Sparkles className="w-4 h-4 text-[#92400E] shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-[#92400E] leading-relaxed font-semibold">
              <strong>Simulated Demo Environment:</strong> This action successfully
              validated the booking flow, but no actual food order was placed.
              In production, this triggers an SMS dispatch to your mobile number.
            </p>
          </div>

          <Button
            variant="dark"
            size="md"
            onClick={handleCloseModal}
            className="w-full justify-center"
          >
            Got it, thanks!
          </Button>
        </div>
      </Modal>
    </section>
  );
}
