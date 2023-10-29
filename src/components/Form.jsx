import { useForm } from "react-hook-form";
import Error from "./Error";
import Line from "./Line";
import End from "./End";
function Form() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  function onSubmit(data) {
    console.log(data);
    reset();
  }
  const { errors } = formState;
  console.log(errors);
  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="w-456 0  0 relative ml-[107px]  mt-[370px]   w-[465px]  flex-col  items-start  gap-[20px]  rounded-[20px]    bg-white p-[30px] text-white shadow-md">
      <p className="font-AbeeZee mt-[10px] w-[396px] flex-1 text-[34px] font-normal leading-[21.19px] text-[#373737]">
        Registration From
      </p>
      <p className="font-noto-sans mt-[15px] h-[22px] w-[396px] text-[16px] text-base font-normal leading-[21.79px]  text-gray-500">
        Register your account here
      </p>

      <Line />

      {/* use form hook */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label
            className="inline-flex h-[19px] w-[396px] items-center gap-5 text-[#373737]"
            htmlFor="email"
          >
            Email
          </label>

          <div>
            <input
              type="email"
              {...register("email", {
                required: "Required",
              })}
              className={`rounded-4 bg-Whitetop-[6px] text-medium font-noto-sans text-16 inline-flex h-[48px] w-[396px] flex-shrink-0 items-center justify-end gap-[10px] rounded-[4px] border border-solid border-neutral-900 p-[10px] pl-[16px] pr-[16px] font-normal text-black ${
                errors.email?.message
                  ? "mb-[0px] text-black"
                  : "mb-[20px] text-black" // Add mb-[5px] when there's an error message
              }`}
            ></input>
            {errors?.email?.message && <Error message={errors.email.message} />}
          </div>
        </div>
        <div>
          <label
            className="inline-flex h-[19px] w-[396px] items-center gap-5 text-[#373737]"
            htmlFor="username"
          >
            Username
          </label>

          <input
            type="text"
            {...register("username", {
              required: "Required ",
            })}
            className={`rounded-4 bg-Whitetop-[6px] text-medium font-noto-sans text-16 text-gray-700" placeholder="Username" id="username" ${
              errors.username?.message
                ? "mb-[0px]  text-black"
                : "mb-[20px]  text-black"
            }
         
            inline-flex
            h-[48px] w-[396px] flex-shrink-0 items-center justify-end gap-[10px] rounded-[4px] border border-solid border-neutral-900 p-[10px] pl-[16px] pr-[16px]
          font-normal`}
          ></input>
          {errors?.username?.message && (
            <Error message={errors.username.message} />
          )}
        </div>
        <div>
          <label
            className="inline-flex h-[19px] w-[396px] items-center gap-5 text-[#373737]"
            htmlFor="password"
          >
            Password
          </label>

          <input
            type="password"
            {...register("password", {
              required: "Required",
            })}
            className={`rounded-4 bg-Whitetop-[6px] text-medium font-noto-sans text-16 text-gray-700" placeholder="Password" id="password  inline-flex h-[48px] w-[396px] flex-shrink-0 items-center justify-end gap-[10px] rounded-[4px] border border-solid  border-neutral-900 p-[10px]  pl-[16px]
            pr-[16px]
            font-normal ${
              errors.password?.message
                ? "mb-[0px]  text-black"
                : "mb-[20px]  text-black"
            }`}
          ></input>
          {errors?.password?.message && (
            <Error message={errors.password.message} />
          )}
        </div>

        <div>
          <label
            className="inline-flex h-[19px] w-[396px] items-center gap-5 text-[#373737]"
            htmlFor="confirm"
          >
            Confirm Password
          </label>

          <input
            type="password"
            {...register("confirm", {
              required: "Required",
              validate: (value) =>
                value == getValues().password || "Password does not",
            })}
            className={`rounded-4 bg-Whitetop-[6px] text-medium font-noto-sans text-16 text-gray-700" placeholder="Confirm Password" id="confirm  inline-flex h-[48px] w-[396px] flex-shrink-0 items-center justify-end gap-[10px] rounded-[4px] border  border-solid border-neutral-900  p-[10px]
            pl-[16px] pr-[16px]
            font-normal ${
              errors.email?.message
                ? "mb-[0px] text-black"
                : "mb-[20px] text-black"
            }`}
          ></input>
          {errors?.confirm?.message && (
            <Error message={errors.confirm.message} />
          )}
        </div>
        <button
          type="submit"
          className="flex h-[44px] w-[396px] transform cursor-pointer  items-center justify-center  self-stretch rounded-[4px] bg-[#D80027] px-[32px] py-[10px] text-[#FFFFFF] transition duration-300 ease-out hover:scale-95"
        >
          Iniciar sesión
        </button>
      </form>
      <p className="font-noto-sans mt-[20px] h-[22px] w-[396px] self-stretch text-center text-[16px] font-normal  leading-[21.79px] text-[#D80027] underline">
        Olvidé mi contraseña
      </p>
      <Line />
      <End />
    </div>
  );
}

export default Form;
