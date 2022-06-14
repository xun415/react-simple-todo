import {useForm } from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {Categories} from "../atoms"

interface IForm {
    category: string;
}

function CreateCategory() {
    const setCategories = useSetRecoilState(Categories);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    // const [category, setCategory] = useRecoilState(categoryState);
    const handleValid = ({ category }: IForm) => {
        setCategories((prev)=>{
            return {
                [category]: category,
                ...prev
            }

        })
        setValue("category", "");
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("category", {
                        required: "Please write a New Category",
                    })}
                    placeholder="Write a New Category"
                />
                <button>Add</button>
            </form>
        </>

    )
}

export default CreateCategory;