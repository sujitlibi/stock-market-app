'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from '@/lib/constants';
import { CountrySelectField } from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Input */}
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Sujit Kumar Libi"
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full name is required!', minLength: 2 }}
        />

        <InputField
          name="email"
          label="Email"
          placeholder="demo@pravaha.com"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email address is required!',
            pattern: /^\w+@\w+\.\w+$/,
            message: 'Email address is required.',
          }}
        />

        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required!', minLength: 8 }}
        />

        {/** Country */}

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-yellow-500 w-full mt-5"
        >
          {isSubmitting ? 'Create Account' : 'Start your investing journey'}
        </Button>

        <FooterLink
          text="Already have an account?"
          linkText="Signin"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignUp;
