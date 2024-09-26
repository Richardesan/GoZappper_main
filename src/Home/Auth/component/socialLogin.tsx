
import CustomButton2 from "../../../Dashboard/components/customButton2"

const SocialLogin = () => {
  return (
        <div className="font-bold text-darkText flex items-center gap-3 max-sm:block max-sm:space-y-2">
        <CustomButton2
          buttonText="Github"
          img="/Github.svg"
          dark={true}
        />
        <CustomButton2
          buttonText="Google"
          img="/Negative.svg"
          dark={true}
        />
        
      </div>
  )
}

export default SocialLogin