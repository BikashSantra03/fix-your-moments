import type { EnquiryInput } from "@/types/content";

// TODO: POST the enquiry to the Google Sheets endpoint once it's provided.
// Until then nothing is stored or sent — do not launch publicly with this stub.
export async function submitEnquiry(input: EnquiryInput): Promise<void> {
  void input;
  await new Promise((resolve) => setTimeout(resolve, 700));
}
