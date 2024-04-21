export async function GET(req) {
  const urlParams = new URLSearchParams(new URL(req.url).search);
  const casedet = urlParams.get("casedet");
  try {
    const res = await fetch(
      `https://tshc.gov.in/Hcdbs/caseDetails.jsp?casedet=${casedet}`
    );
    const result = await res.json();
    return Response.json({
      result,
    });
  } catch (error) {
    return Response.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
