import { Label } from "../ui/label";
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
        url: data.url,
      }).unwrap();

      reset();
    } catch (err) {
      alert(`Failed to create project: ${err}`)
    }
  } 

  return (
    <Dialog>
      <form onSubmit={handleSubmit(handleProjectCreate)}>
        <DialogTrigger asChild>
          <Button className="bg-primary-text text-lg py-7">
            <span>Add Podcast</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Podcast Details</DialogTitle>
            <DialogDescription>
              Enter the podcast details and link of the podcast. "Supported
              Platforms: YouTube."
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Podcast Name</Label>
              <InputField
              id="title"
              label="title"
              {...register("title", { required: true})}
              placeholder="podcast title"
               />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="youtubeurl-1">Youtube URL</Label>
              <InputField
                label="URL"
                id="url"
                {...register("url", { required: true})}
                placeholder="https://youtu.be/9oL3o6pme7w?si=Yj7qpUX7-cGik7Ti"
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
        </DialogContent>
      </form>
    </Dialog>
  );
}
