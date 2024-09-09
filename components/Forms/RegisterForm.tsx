'use client';
import React, { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import TextInput from '../global/Textinput';
import SubmitButton from '../global/SubmitButton';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUser } from '@/actions/users';
import { useDropzone } from 'react-dropzone';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useUploadThing } from '@/utils/uploadthing';

export type RegisterProps = {
  email: string;
  fullName: string;
  gender: string;
  maritalStatus: string;
  password: string;
  token?: any;
  role?: any;
  profile: {
    profilePicture?: string;
    graduationYear: string;
    degree: string;
    majorFieldOfStudy: string;
    currentPosition: string;
    contactInformation: string;
    achievements?: string;
    biography?: string;
    interests?: string;
    socialMediaLinks?: string;
    alumniActivities?: string;
    permanentAddress?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    religiousAfflictions?: string;
    localResidence?: string;
    personalSkills?: string;
    courseStudied?: string;
    employmentStatus?: string;
    organization?: string;
    jobAcquisitionTime?: string;
    selectedAccordingToQualification?: string;
    jobInLineWithStudy?: string;
    studyProgramRelevance?: string;
    curriculumRecommendations?: string;
    businessType?: string;
    businessRelatedToStudy?: string;
    selfEmploymentReason?: string;
    capitalSource?: string;
    skillsRelevance?: string;
    skillsRecommendations?: string;
    employedBefore?: string;
    reasonLeftJob?: string;
    skillsNeeded?: string;
    supportNeeded?: string;
    courseRelevance?: string;
    recommendations?: string;
  };
};

export default function RegisterForm({ role }: { role?: string }) {
  const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<RegisterProps>();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload completed:", res);
      if (res && res.length > 0) {
        const uploadedUrl = res[0].url;
        console.log("Uploaded URL:", uploadedUrl);
        setUploadedImageUrl(uploadedUrl);
        setValue('profile.profilePicture', uploadedUrl);
        toast.success('Image uploaded successfully!');
      }
    },
    onUploadError: (error: Error) => {
      console.error('Upload error:', error);
      toast.error('Image upload failed');
    },
  });

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    handleUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['image/*']),
    maxFiles: 1,
  });

  const handleUpload = async (filesToUpload: File[] = files) => {
    if (filesToUpload.length > 0) {
      try {
        await startUpload(filesToUpload);
      } catch (error) {
        console.error("Upload error:", error);
        toast.error('Image upload failed');
      }
    }
  };

  const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
    data.role = role;
    setLoading(true);
    try {
      const res = await createUser(data);
      if (res.status === 201) {
        reset();
        router.push(`/verify-account/${res.data?.id}`);
        toast.success('User Created Successfully!');
      } else if (res.status === 404) {
        toast.error('Email Already Exists!');
      }
    } catch (error) {
      console.log(`Error`, error);
      toast.error('An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className='p-5'>
      <div className="grid md:grid-cols-2 grid-cols-1 md:m-20 mx-2 md:px-0 px-8 my-10 md:w-[80%] w-full md:mx-auto shadow-md overflow-hidden rounded-md">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="py-8 w-full md:px-8 flex flex-col gap-2">
          <h2 className='font-bold'>Create Your Account</h2>
          <p>Welcome, fill in the details to create your account</p>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="grid gap-3 pt-3">
                <div className="mb-4">
                  <label htmlFor="profilePicture">Profile Picture</label>
                  <div {...getRootProps()} className="border-2 border-dashed p-4 cursor-pointer">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the image here ...</p>
                    ) : (
                      <p>Drag 'n' drop an image here, or click to select one</p>
                    )}
                  </div>
                  {files.length > 0 && (
                    <div>
                      <img src={URL.createObjectURL(files[0])} alt="Preview" className="mt-2 max-w-xs" />
                      {isUploading && <p>Uploading...</p>}
                    </div>
                  )}
                  {uploadedImageUrl && (
                    <p className="mt-2 text-green-600">Image uploaded successfully!</p>
                  )}
                </div>
                <TextInput register={register} errors={errors} label="Full Name" name="fullName" />
                <TextInput register={register} errors={errors} label="Email" name="email" placeholder='Enter Your Email' />
                <TextInput register={register} errors={errors} label="Password" name="password" type="password" />
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="">
                    <label htmlFor="gender">Gender</label>
                    <select className='h-10 shadow-md' {...register("gender", { required: "Gender is required" })}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select className='h-10 shadow-md' {...register("maritalStatus", { required: "Marital status is required" })}>
                      <option value="">Select Marital Status</option>
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-3 pt-3">
                <TextInput register={register} errors={errors} label="Graduation Year" name="profile.graduationYear" type="number" />
                <div className="">
                  <label htmlFor="degree">Degree</label>
                  <select className='h-10 shadow-md w-full' {...register("profile.degree", { required: "Degree is required" })}>
                    <option value="">Select Degree</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <TextInput register={register} errors={errors} label="Major/Field of Study" name="profile.majorFieldOfStudy" />
                <TextInput register={register} errors={errors} label="Current Position" name="profile.currentPosition" />
                <TextInput register={register} errors={errors} label="Course Studied" name="profile.courseStudied" />
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-3 pt-3">
                <TextInput register={register} errors={errors} label="Contact Information" name="profile.contactInformation" />
                <TextInput register={register} errors={errors} label="Phone Number" name="profile.phoneNumber" />
                <TextInput register={register} errors={errors} label="Permanent Address" name="profile.permanentAddress" />
                <TextInput register={register} errors={errors} label="Local Residence" name="profile.localResidence" />
                <TextInput register={register} errors={errors} label="Date of Birth" name="profile.dateOfBirth" type="date" />
                <TextInput register={register} errors={errors} label="Religious Affiliations" name="profile.religiousAfflictions" />
              </div>
            )}

            {step === 4 && (
              <div className="grid gap-3 pt-3">
                <TextInput register={register} errors={errors} label="Achievements" name="profile.achievements" />
                <TextInput register={register} errors={errors} label="Biography" name="profile.biography" />
                <TextInput register={register} errors={errors} label="Interests" name="profile.interests" />
                <TextInput register={register} errors={errors} label="Social Media Links" name="profile.socialMediaLinks" />
                <TextInput register={register} errors={errors} label="Alumni Activities" name="profile.alumniActivities" />
                <TextInput register={register} errors={errors} label="Personal Skills" name="profile.personalSkills" />
              </div>
            )}

            {step === 5 && (
              <div className="grid gap-3 pt-3">
                <label htmlFor="employmentStatus">Employment Status</label>
                <select className='h-10 shadow-md' {...register("profile.employmentStatus")}>
                  <option value="">Select Employment Status</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                </select>
                {watch("profile.employmentStatus") === "employed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Organization" name="profile.organization" />
                    <TextInput register={register} errors={errors} label="Job Acquisition Time" name="profile.jobAcquisitionTime" type="date" />
                    <div className="">
                      <label htmlFor="selectedAccordingToQualification">Selected According to Qualification</label>
                      <select className='h-10 shadow-md w-full' {...register("profile.selectedAccordingToQualification")}>
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="jobInLineWithStudy">Job in Line with Study</label>
                      <select className='h-10 shadow-md w-full' {...register("profile.jobInLineWithStudy")}>
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <TextInput register={register} errors={errors} label="Study Program Relevance" name="profile.studyProgramRelevance" />
                    <TextInput register={register} errors={errors} label="Curriculum Recommendations" name="profile.curriculumRecommendations" />
                  </>
                )}
                {watch("profile.employmentStatus") === "self-employed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Business Type" name="profile.businessType" />
                    <TextInput register={register} errors={errors} label="Business Related to Study" name="profile.businessRelatedToStudy" />
                    <TextInput register={register} errors={errors} label="Self Employment Reason" name="profile.selfEmploymentReason" />
                    <TextInput register={register} errors={errors} label="Capital Source" name="profile.capitalSource" />
                    <TextInput register={register} errors={errors} label="Skills Relevance" name="profile.skillsRelevance" />
                    <TextInput register={register} errors={errors} label="Skills Recommendations" name="profile.skillsRecommendations" />
                  </>
                )}
                {watch("profile.employmentStatus") === "unemployed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Employed Before" name="profile.employedBefore" />
                    <TextInput register={register} errors={errors} label="Reason Left Job" name="profile.reasonLeftJob" />
                    <TextInput register={register} errors={errors} label="Skills Needed" name="profile.skillsNeeded" />
                    <TextInput register={register} errors={errors} label="Support Needed" name="profile.supportNeeded" />
                  </>
                )}
                <TextInput register={register} errors={errors} label="Course Relevance" name="profile.courseRelevance" />
                <TextInput register={register} errors={errors} label="Recommendations" name="profile.recommendations" />
              </div>
            )}

            <div className="py-3 flex justify-between">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
                  Previous
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Next
                </button>
              ) : (
                <SubmitButton title='Create Account'   loading={loading} />
              )}
            </div>
          </form>

          <p className="text-center text-sm text-gray-500">
            Already Registered?
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
        <div className="hidden md:block">
          <Image src='https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg' alt='' className='w-full h-full' width={400} height={400} />
        </div>
      </div>
    </div>
  );
}