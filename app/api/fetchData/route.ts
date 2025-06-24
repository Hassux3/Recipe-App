export async function POST(request: Request) {
  const body = await request.json();
  console.log("Body: ", body);

  const recipe = body.recName;

  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  );
  let returnedData = await data.json();

  if (data.status == 401) {
    returnedData = "Unauthorized";
  } else if (data.status == 409) {
    returnedData = "Insuffient Permissions";
  } else if (data.status == 200) {
  } else {
    returnedData = "Unexpected Error Occured";
  }

  return new Response(JSON.stringify(returnedData), {
    status: data.status,
    headers: { "Content-Type": "application/json" },
  });
}
