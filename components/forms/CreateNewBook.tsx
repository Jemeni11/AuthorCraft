import { createABook } from "@/utils/supabaseClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useReadLocalStorage } from "usehooks-ts";

const formSchema = z.object({
  workName: z.string().min(5, {
    message: "Book name must be at least 5 characters.",
  }),
  summary: z.string().min(10, {
    message: "Summary must be at least 10 characters.",
  }),
});

export default function CreateNewBook() {
  const userID =
    useReadLocalStorage<string | undefined>("AuthorCraftUserID") || "";
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workName: "",
      summary: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    createABook(values.summary, userID, values.workName)
      .then((data) => {
        console.log(data);
        toast({
          title: "Success!",
          description: `Your book ${values.workName} has been created.`,
        });
      })
      .catch((error) =>
        toast({
          title: "There was an error.",
          description: `${error}`,
          variant: "destructive",
        }),
      );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="workName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book name</FormLabel>
              <FormControl>
                <Input placeholder="How to be a better writer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="From best-selling author, John Doe, comes a book that will change your writing skills."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
