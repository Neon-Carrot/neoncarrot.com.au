export function getFilePath(filename: string, page?: number) {
  return `${import.meta.env.PUBLIC_AZURE_BLOB_STORAGE_URL}/${filename}${
    page !== undefined ? `#page=${page}` : ""
  }`;
}

export function getReadableFilePath(filename: string) {
  switch (filename) {
    case "aged-care-quality-standards-draft-worker-guidance_0.pdf":
      return "Guidance for aged care workers (Draft)";
    case "aged-care-workers-factsheet-english.pdf":
      return "Aged care workers - Your voice in improving aged care";
    case "code_of_conduct_for_aged_care_case_studies_for_workers_and_providers.pdf":
      return "Code of Conduct for Aged Care - Case studies";
    case "code_of_conduct_for_aged_care_worker_fact_sheet_0_0.pdf":
      return "Code of Conduct for Aged Care - Worker fact sheet";
    case "code-of-conduct-for-aged-care-worker-guidance.pdf":
      return "Code of Conduct for Aged Care";
    case "nutrition-and-texture-modified-food-and-drink.pdf":
      return "Nutrition and texture modified food and drink";
    case "procedural-fairness-and-worker-regulation_16112023.pdf":
      return "Procedural fairness and worker regulation";
    case "rb-2023-21-procedural-fairness.pdf":
      return "RB 2023-21 Procedural fairness";
    case "supporting-safe-and-enjoyable-mealtimes-for-people-with-swallowing-difficulties-age-care-staff.pdf":
      return "Supporting safe and enjoyable mealtimes for people with swallowing difficulties";
    default:
      return filename;
  }
}
