import { jsPDF } from "jspdf";

export const generateInvoice = (data, txnId) => {
  const doc = new jsPDF();

  // --- Aesthetic Constants ---
  const PRIMARY_COLOR = [25, 25, 112]; // Midnight Blue
  const SECONDARY_COLOR = [100, 100, 100]; // Grey for labels
  const TEXT_COLOR = [30, 30, 30]; // Dark text
  const LINE_COLOR = [200, 200, 200]; // Light grey lines

  const PAGE_WIDTH = doc.internal.pageSize.getWidth();
  const MARGIN_LEFT = 20;
  const MARGIN_RIGHT = PAGE_WIDTH - 20;
  let y = 20;

  // --- 1. Organization Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("RAIT ACM STUDENT CHAPTER", MARGIN_LEFT, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  y += 6;
  doc.text("Ramrao Adik Institute of Technology, Nerul, Navi Mumbai, Maharashtra", MARGIN_LEFT, y);
  y += 5;
  doc.text("Email: raitacmchapter@gmail.com | Phone: +91-XXXXXXXXXX", MARGIN_LEFT, y);

  // Divider line
  y += 5;
  doc.setDrawColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.setLineWidth(1.2);
  doc.line(MARGIN_LEFT, y, MARGIN_RIGHT, y);

  // --- 2. Invoice Header ---
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("INVOICE", MARGIN_LEFT, y);

  // Invoice details on top-right
  const detailX = 140;
  const valueX = 180;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);

  doc.text("Date:", detailX, y - 10);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(new Date().toLocaleDateString(), valueX, y - 10);

  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  doc.text("Invoice ID:", detailX, y - 4);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(txnId || "N/A", valueX, y - 4);

  // --- 3. Registration Details Section ---
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("REGISTRATION DETAILS", MARGIN_LEFT, y);

  y += 5;
  doc.setDrawColor(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_LEFT, y, MARGIN_RIGHT, y);
  y += 10;

  const details = [
    ["Event", data.eventName || "N/A"],
    ["Participant Name", data.name || "N/A"],
    ["Email", data.email || "N/A"],
    ["Phone No.", data.phone || "N/A"],
    [
      "Branch / Year / Division",
      `${data.branch || ""} / ${data.batch || ""} / ${data.division || ""}`.trim() || "N/A",
    ],
    ["Roll No.", data.rollNumber || "N/A"],
    ["ACM Member", data.acmMember || "N/A"],
  ];

  const col1X = MARGIN_LEFT;
  const col2X = 80;
  const rowHeight = 8;

  details.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
    doc.text(label + ":", col1X, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    doc.text(String(value), col2X, y);

    y += rowHeight;
  });

  // --- 4. Payment Summary Section ---
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("PAYMENT SUMMARY", MARGIN_LEFT, y);

  y += 5;
  doc.setDrawColor(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  doc.line(MARGIN_LEFT, y, MARGIN_RIGHT, y);
  y += 10;

  const amountPaid = data.acmMember === "Yes" ? "₹50.00" : "₹100.00";
  const paymentSummary = [
    ["Description", "Amount (₹)"],
    ["Registration Fee", amountPaid],
    ["Payment Mode", "Online / UPI"],
    ["Transaction ID", txnId || "N/A"],
  ];

  const colA = MARGIN_LEFT;
  const colB = 130;
  const rowGap = 8;

  paymentSummary.forEach(([key, val], index) => {
    doc.setFont("helvetica", index === 0 ? "bold" : "normal");
    doc.setFontSize(11);
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    doc.text(key, colA, y);
    doc.text(val, colB, y, { align: "right" });
    y += rowGap;
  });

  // Line before total
  y += 5;
  doc.setLineWidth(0.5);
  doc.setDrawColor(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  doc.line(130, y, MARGIN_RIGHT, y);
  y += 8;

  // Total
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("TOTAL AMOUNT PAID:", 135, y, { align: "right" });

  doc.setFontSize(16);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(amountPaid, MARGIN_RIGHT, y, { align: "right" });

  // Final underline
  y += 5;
  doc.setDrawColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.setLineWidth(1.2);
  doc.line(130, y, MARGIN_RIGHT, y);

  // --- 5. Notes Section ---
  y += 20;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  doc.text(
    "Note: Please retain this invoice for future reference or event entry verification.",
    MARGIN_LEFT,
    y
  );
  y += 6;
  doc.text(
    "This is a computer-generated invoice. No signature required.",
    MARGIN_LEFT,
    y
  );

  // --- 6. Footer ---
  const FOOTER_Y = 280;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  doc.text(
    "Thank you for participating in " ,data.eventName,
    PAGE_WIDTH / 2,
    FOOTER_Y,
    { align: "center" }
  );

  doc.save("Registration_Invoice.pdf");
};
