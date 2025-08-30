import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useCreateProjectMutation } from "~/store/features/projects/projectAPI";
import type { IProjectFormProps } from "~/constants/interfaces";
import { useForm } from "react-hook-form";
import { InputField } from "../cell/InputField";

export function AddModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IProjectFormProps>();
  const [createProject, {isLoading: isProjectCreating }] = useCreateProjectMutation();

  const handleProjectCreate = async (data: IProjectFormProps) => {
    try {
      await createProject({
        title: data.title,
        url: data.youtubeUrl,
        // TODO: If possible eliminate type conversion.
        hostPopularity: Number(data.hostPopul),
        guestPopularity: Number(data.guestPopul),
        numberOfAds: Number(data.numberOfAds)
      }).unwrap();

      reset();
    } catch (err) {
      alert(`Failed to create project: ${err}`)
    }
  } 

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-text text-lg py-7">
            <span>Add Podcast</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(handleProjectCreate)}>
            <DialogHeader>
              <DialogTitle>Add Podcast Details</DialogTitle>
              <DialogDescription>
                Enter the podcast details and link of the podcast. "Supported
                Platforms: YouTube."
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <InputField
                id="title"
                label="Podcast Name"
                {...register("title", { required: true})}
                placeholder="podcast title"
                />
              </div>
              <div className="grid gap-3">
                <InputField
                  label="Youtube URL"
                  id="youtubeUrl"
                  {...register("youtubeUrl", { required: true, min: 0, max: 100})}
                  placeholder="https://youtu.be/9oL3o6pme7w?si=Yj7qpUX7-cGik7Ti"
                />
              </div>
              <div className="flex gap-5 justify-between">
                <div className="w-1/2">
                  <InputField
                    label="Host Popularity (%)"
                    id="hostPopul"
                    {...register("hostPopul", { required: true, min: 0, max: 100})}
                    placeholder="70"
                  />
                </div>
                <div className="w-1/2">
                  <InputField
                    label="Guest Popularity (%)"
                    id="guestPopul"
                    {...register("guestPopul", { required: true, min: 0})}
                    placeholder="90"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <InputField
                    label="Number of Ads"
                    id="numberOfAds"
                    {...register("numberOfAds", { required: true})}
                    placeholder="5"
                  />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isProjectCreating || isSubmitting}>
                {isProjectCreating || isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
}
