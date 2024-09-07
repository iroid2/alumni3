'use client';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../global/SubmitButton';
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-number-input';
import TextInput from '../global/Textinput';

type FormData = {
  profilePicture?: FileList;
  name: string;
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

export default function MoreInfoForm() {
  const { register, handleSubmit, watch, formState: { errors, isValid }, setValue, control } = useForm<FormData>({ mode: 'onChange' });

  
  const [step, setStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<'submitted' | null>(null);
  const [customMajor, setCustomMajor] = useState('');
  const [customCourse, setCustomCourse] = useState('');
  const [majors, setMajors] = useState<string[]>(['Computer Science','Economics', 'Engineering', 'Mathematics']); // Predefined majors
  const [courses, setCourses] = useState<string[]>(['Math 101', 'Physics 101', 'Chemistry 101']); // Predefined courses
  const status = watch('employmentStatus');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmissionStatus('submitted');
  };

  const handleNext = () => {
    if (isValid) {
      setStep((prev) => prev + 1);
      toast.success("Thanks for clicking next");
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleAddCustomMajor = () => {
    if (customMajor && !majors.includes(customMajor)) {
      setMajors((prev) => [...prev, customMajor]);
      setValue('majorFieldOfStudy', customMajor);
      setCustomMajor('');
    }
  };

  const handleAddCustomCourse = () => {
    if (customCourse && !courses.includes(customCourse)) {
      setCourses((prev) => [...prev, customCourse]);
      setValue('courseStudied', customCourse);
      setCustomCourse('');
    }
  };

  const years = Array.from({ length: 2026 - 1965 + 1 }, (_, i) => 1965 + i);

  if (submissionStatus === 'submitted') {
    return (
      <div className="w-[50%] mx-auto">
        <h2 className='font-bold text-2xl'>Thank You for Your Submission!</h2>
        <p className="animate">Your information has been submitted successfully.</p>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
  }

  return (
    <div>
      <div className="w-[50%] mx-auto">
        <h2 className='font-bold text-2xl'>Enter More Information about You</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <label htmlFor="profilePicture">Profile Picture</label>
                <input 
                  type="file"
                  {...register('profilePicture')} 
                  accept="image/*"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Full Name"
                  name="name"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label htmlFor="graduationYear">Graduation Year</label>
                <select {...register('graduationYear')} id="graduationYear">
                  <option value="">Select...</option>
                  {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Degree"
                  name="degree"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label htmlFor="majorFieldOfStudy">Major/Field of Study</label>
                <select 
                  {...register('majorFieldOfStudy')} 
                  id="majorFieldOfStudy"
                  value={watch('majorFieldOfStudy')}
                  onChange={(e) => setValue('majorFieldOfStudy', e.target.value)}
                >
                  <option value="">Select...</option>
                  {majors.map(major => <option key={major} value={major}>{major}</option>)}
                  <option value="other">Other</option>
                </select>
                {watch('majorFieldOfStudy') === 'other' && (
                  <div className="pt-2">
                    <input
                      type="text"
                      value={customMajor}
                      onChange={(e) => setCustomMajor(e.target.value)}
                      placeholder="Add your own major"
                    />
                    <button type="button" onClick={handleAddCustomMajor} className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                      Add Major
                    </button>
                  </div>
                )}
              </div>
              <div className="grid gap-3 pt-3">
                <label htmlFor="courseStudied">Course Studied</label>
                <select 
                  {...register('courseStudied')} 
                  id="courseStudied"
                  value={watch('courseStudied')}
                  onChange={(e) => setValue('courseStudied', e.target.value)}
                >
                  <option value="">Select...</option>
                  {courses.map(course => <option key={course} value={course}>{course}</option>)}
                  <option value="other">Other</option>
                </select>
                {watch('courseStudied') === 'other' && (
                  <div className="pt-2">
                    <input
                      type="text"
                      value={customCourse}
                      onChange={(e) => setCustomCourse(e.target.value)}
                      placeholder="Add your own course"
                    />
                    <button type="button" onClick={handleAddCustomCourse} className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                      Add Course
                    </button>
                  </div>
                )}
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Current Position"
                  name="currentPosition"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Contact Information"
                  name="contactInformation"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Achievements"
                  name="achievements"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Biography"
                  name="biography"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Interests"
                  name="interests"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Social Media Links"
                  name="socialMediaLinks"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Alumni Activities"
                  name="alumniActivities"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Permanent Address"
                  name="permanentAddress"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Controller
  name="phoneNumber"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <PhoneInput
      {...field}
      defaultCountry="UG"
      id="phoneNumber"
      onChange={(value) => field.onChange(value)}
    />
  )}
/>
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Religious Afflictions"
                  name="religiousAfflictions"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Local Residence"
                  name="localResidence"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Personal Skills"
                  name="personalSkills"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <label htmlFor="employmentStatus">Employment Status</label>
                <select
                  {...register('employmentStatus')}
                  id="employmentStatus"
                >
                  <option value="">Select...</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                </select>
              </div>
              {status === 'employed' && (
                <>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Organization"
                      name="organization"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Job Acquisition Time"
                      name="jobAcquisitionTime"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Selected According to Qualification"
                      name="selectedAccordingToQualification"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Job in Line with Study"
                      name="jobInLineWithStudy"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Study Program Relevance"
                      name="studyProgramRelevance"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Curriculum Recommendations"
                      name="curriculumRecommendations"
                    />
                  </div>
                </>
              )}
              {status === 'self-employed' && (
                <>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Business Type"
                      name="businessType"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Business Related to Study"
                      name="businessRelatedToStudy"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Self Employment Reason"
                      name="selfEmploymentReason"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Capital Source"
                      name="capitalSource"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Skills Relevance"
                      name="skillsRelevance"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Skills Recommendations"
                      name="skillsRecommendations"
                    />
                  </div>
                </>
              )}
              {status === 'unemployed' && (
                <>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Employed Before"
                      name="employedBefore"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Reason Left Job"
                      name="reasonLeftJob"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Skills Needed"
                      name="skillsNeeded"
                    />
                  </div>
                  <div className="grid gap-3 pt-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Support Needed"
                      name="supportNeeded"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Course Relevance"
                  name="courseRelevance"
                />
              </div>
              <div className="grid gap-3 pt-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Recommendations"
                  name="recommendations"
                />
              </div>
            </div>
          )}

          <div className="pt-4">
            {step > 1 && (
              <button type="button" onClick={handleBack} className="mr-4 bg-gray-500 text-white px-4 py-2 rounded">
                Back
              </button>
            )}
            {step < 5 ? (
              <button type="button" onClick={handleNext} disabled={!isValid} className={`px-4 py-2 rounded ${!isValid ? 'bg-gray-500' : 'bg-blue-500'} text-white`}>
                Next
              </button>
            ) : (
              <SubmitButton title="Submit" loading />
            )}
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
