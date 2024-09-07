// // src/components/MultiStepForm.tsx
// import { nextStep, previousStep, updateForm } from "@/app/store/formSlice";
// import { RootState } from "@/app/store/store";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// // import { RootState } from "../store/store";
// // import { updateForm, nextStep, previousStep } from "../store/formSlice";
 
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
// }
 
// const MultiStepForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const { firstName, lastName, email, phone, step } = useSelector(
//     (state: RootState) => state.form
//   );
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: { firstName, lastName, email, phone },
//   });
 
//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     dispatch(updateForm(data));
//     console.log(data);
//   };
 
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {step === 1 && (
//           <div>
//             <div>
//               <label>First Name</label>
//               <input {...register("firstName", { required: true })} />
//               {errors.firstName && <span>This field is required</span>}
//             </div>
//             <div>
//               <label>Last Name</label>
//               <input {...register("lastName", { required: true })} />
//               {errors.lastName && <span>This field is required</span>}
//             </div>
//             <button
//               type="button"
//               onClick={() => {
//                 handleSubmit(onSubmit)();
//                 dispatch(nextStep());
//               }}
//             >
//               Next
//             </button>
//           </div>
//         )}
//         {step === 2 && (
//           <div>
//             <div>
//               <label>Email</label>
//               <input {...register("email", { required: true })} />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div>
//               <label>Phone</label>
//               <input {...register("phone", { required: true })} />
//               {errors.phone && <span>This field is required</span>}
//             </div>
//             <button type="button" onClick={() => dispatch(previousStep())}>
//               Back
//             </button>
//             <button type="submit">Submit</button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };
 
// export default MultiStepForm;