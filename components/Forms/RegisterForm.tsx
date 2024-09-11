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

  const inputStyle = "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const selectStyle = "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className='p-5'>
      <div className="grid md:grid-cols-1 grid-cols-1 md:m-20 md:px-0 md:px-8 px-3 my-10 md:w-[50%] w-full md:mx-auto shadow-md overflow-hidden rounded-md">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="md:py-8 w-full md:px-8 flex flex-col md:mt-3 mt-[100px] gap-2">
          <h2 className='font-bold text-2xl mb-2'>Create Your Account</h2>
          <p className="text-gray-600 mb-6">Welcome, fill in the details to create your account</p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="mb-4">
                  <label htmlFor="profilePicture" className={labelStyle}>Profile Picture</label>
                  <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-sky-500 transition duration-300">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p className="text-sky-500">Drop the image here ...</p>
                    ) : (
                      <p className="text-gray-500">Drag 'n' drop an image here, or click to select one</p>
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
                <TextInput register={register} errors={errors} label="Full Name" name="fullName" className={inputStyle} rules={{ required: "Full name is required" }} />
                <TextInput register={register} errors={errors} label="Email" name="email" placeholder='Enter Your Email' className={inputStyle} rules={{ required: "Email is required" }} />
                <TextInput register={register} errors={errors} label="Password" name="password" type="password" className={inputStyle} rules={{ required: "Password is required" }} />
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div>
                    <label htmlFor="gender" className={labelStyle}>Gender</label>
                    <select {...register("gender", { required: "Gender is required" })} className={selectStyle}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="maritalStatus" className={labelStyle}>Marital Status</label>
                    <select {...register("maritalStatus", { required: "Marital status is required" })} className={selectStyle}>
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
              <div className="space-y-4">
                <TextInput register={register} errors={errors} label="Graduation Year" name="profile.graduationYear" type="number" className={inputStyle} rules={{ required: "Graduation year is required" }} />
                <div>
                  <label htmlFor="degree" className={labelStyle}>Degree</label>
                  <select {...register("profile.degree", { required: "Degree is required" })} className={selectStyle}>
                    <option value="">Select Degree</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <TextInput register={register} errors={errors} label="Major/Field of Study" name="profile.majorFieldOfStudy" className={inputStyle} rules={{ required: "Major is required" }} />
                <TextInput register={register} errors={errors} label="Current Position" name="profile.currentPosition" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Course Studied" name="profile.courseStudied" className={inputStyle} />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <TextInput register={register} errors={errors} label="Contact Information" name="profile.contactInformation" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Phone Number" name="profile.phoneNumber" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Permanent Address" name="profile.permanentAddress" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Local Residence" name="profile.localResidence" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Date of Birth" name="profile.dateOfBirth" type="date" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Religious Affiliations" name="profile.religiousAfflictions" className={inputStyle} />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <TextInput register={register} errors={errors} label="Achievements" name="profile.achievements" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Biography" name="profile.biography" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Interests" name="profile.interests" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Social Media Links" name="profile.socialMediaLinks" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Alumni Activities" name="profile.alumniActivities" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Personal Skills" name="profile.personalSkills" className={inputStyle} />
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="employmentStatus" className={labelStyle}>Employment Status</label>
                  <select {...register("profile.employmentStatus")} className={selectStyle}>
                    <option value="">Select Employment Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                {watch("profile.employmentStatus") === "employed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Organization" name="profile.organization" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Job Acquisition Time" name="profile.jobAcquisitionTime" type="date" className={inputStyle} />
                    <div>
                      <label htmlFor="selectedAccordingToQualification" className={labelStyle}>Selected According to Qualification</label>
                      <select {...register("profile.selectedAccordingToQualification")} className={selectStyle}>
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="jobInLineWithStudy" className={labelStyle}>Job in Line with Study</label>
                      <select {...register("profile.jobInLineWithStudy")} className={selectStyle}>
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <TextInput register={register} errors={errors} label="Study Program Relevance" name="profile.studyProgramRelevance" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Curriculum Recommendations" name="profile.curriculumRecommendations" className={inputStyle} />
                  </>
                )}
                {watch("profile.employmentStatus") === "self-employed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Business Type" name="profile.businessType" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Business Related to Study" name="profile.businessRelatedToStudy" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Self Employment Reason" name="profile.selfEmploymentReason" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Capital Source" name="profile.capitalSource" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Skills Relevance" name="profile.skillsRelevance" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Skills Recommendations" name="profile.skillsRecommendations" className={inputStyle} />
                  </>
                )}
                {watch("profile.employmentStatus") === "unemployed" && (
                  <>
                    <TextInput register={register} errors={errors} label="Employed Before" name="profile.employedBefore" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Reason Left Job" name="profile.reasonLeftJob" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Skills Needed" name="profile.skillsNeeded" className={inputStyle} />
                    <TextInput register={register} errors={errors} label="Support Needed" name="profile.supportNeeded" className={inputStyle} />
                  </>
                )}
                <TextInput register={register} errors={errors} label="Course Relevance" name="profile.courseRelevance" className={inputStyle} />
                <TextInput register={register} errors={errors} label="Recommendations" name="profile.recommendations" className={inputStyle} />
              </div>
            )}

            <div className="py-3 flex justify-between">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
                  Previous
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Next
                </button>
              ) : (
                <SubmitButton title='Create Account' loading={loading} />
              )}
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already Registered?{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}