import { jsPDF } from "jspdf";

export const generateInvoice = (data, txnId) => {
  const doc = new jsPDF();

  // --- Aesthetic Constants ---
  const PRIMARY_COLOR = [25, 25, 112]; // Midnight Blue (for headers/lines)
  const SECONDARY_COLOR = [100, 100, 100]; // Medium Grey (for labels)
  const TEXT_COLOR = [30, 30, 30]; // Dark Grey/Black (for values)
  const LINE_COLOR = [200, 200, 200]; // Light Grey

  const PAGE_WIDTH = doc.internal.pageSize.getWidth();
  const MARGIN_LEFT = 20;
  const MARGIN_RIGHT = PAGE_WIDTH - 20;
  
  let y = 20; // Start with more top margin

  // --- 1. Title/Header Section ---
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("INVOICE", MARGIN_LEFT, y);
  
  y += 5; // Space for the line
  
  // Thick primary line under the title
  doc.setDrawColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.setLineWidth(1.5);
  doc.line(MARGIN_LEFT, y, MARGIN_RIGHT, y);
  
  // --- 2. Invoice Details (Top Right) ---
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  
  const detailX = 150; // X position for labels
  const valueX = 175;  // X position for values

  y = 30; // Reset Y to place details alongside the header

  // Invoice Date
  doc.text("Date:", detailX, y);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(new Date().toLocaleDateString(), valueX, y);

  y += 6;
  
  // Invoice ID
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  doc.text("Invoice ID:", detailX, y);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(txnId || 'N/A', valueX, y); // Added robustness for txnId

  // --- 3. Registration Details (Table Look) ---
  
  y = 65; // Starting position for the main details section

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("REGISTRATION DETAILS", MARGIN_LEFT, y);

  y += 5;
  // Light separator line
  doc.setDrawColor(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_LEFT, y, MARGIN_RIGHT, y);
  
  y += 8;

  // Ensure all data points are strings for jsPDF.text()
  const details = [
    ["Event", data.eventName],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone No.", data.phone],
    ["Branch/Year/Div", `${data.branch || ''} / ${data.batch || ''} / ${data.division || ''}`.trim() || 'N/A'],
    ["Roll No", data.rollNumber],
    ["ACM Member", data.acmMember],
  ];

  const col1X = MARGIN_LEFT;
  const col2X = 80;
  const rowHeight = 8;

  details.forEach(([k, v]) => {
    // Robustness: Convert value to string and default to 'N/A' if null/undefined
    const valueString = String(v || 'N/A'); 

    // Key (Label)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]); 
    doc.text(k + ":", col1X, y);

    // Value
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]); 
    doc.text(valueString, col2X, y);

    y += rowHeight;
  });

  // --- 4. Payment Summary ---
  
  // The y variable now holds the position after the last detail line.
  y += 15; 
  
  // Line above total
  doc.setDrawColor(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  doc.setLineWidth(0.5);
  doc.line(130, y, MARGIN_RIGHT, y); 

  y += 8;
  const amountPaid = data.acmMember === "Yes" ? "₹50.00" : "₹100.00";

  // Label
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text("TOTAL AMOUNT PAID:", 135, y, { align: "right" });

  // Value
  doc.setFontSize(16);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.text(amountPaid, MARGIN_RIGHT, y, { align: "right" });

  y += 5; // Space for the final line

  // Thick primary line below total
  doc.setLineWidth(1.5);
  doc.setDrawColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.line(130, y, MARGIN_RIGHT, y);
  
  // --- 5. Footer ---
  
  const FOOTER_Y = 280; // Fixed position near the bottom

  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(SECONDARY_COLOR[0], SECONDARY_COLOR[1], SECONDARY_COLOR[2]);
  doc.text("Thank you for your registration. This is an automatically generated receipt.", 
          PAGE_WIDTH / 2, FOOTER_Y, { align: "center" });

  doc.save("Registration_Invoice.pdf");
};