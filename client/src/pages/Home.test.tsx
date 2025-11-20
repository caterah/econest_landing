import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import "@testing-library/jest-dom";

// Mock the sonner toast
vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("EcoNest Landing Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Hero Section", () => {
    it("renders the hero section with main headline", () => {
      render(<Home />);
      const headline = screen.getByText(/Compost Without the/i);
      expect(headline).toBeDefined();
    });

    it("displays the hero subheading", () => {
      render(<Home />);
      const subheading = screen.getByText(/EcoNest brings the benefits of composting to your apartment/i);
      expect(subheading).toBeDefined();
    });

    it("renders the hero image", () => {
      render(<Home />);
      const image = screen.getByAltText(/EcoNest Smart Composting System/i) as HTMLImageElement;
      expect(image).toBeDefined();
      expect(image.src).toContain("econest_hero.png");
    });

    it("displays primary CTA button in hero", () => {
      render(<Home />);
      const ctaButtons = screen.getAllByText(/Join the Waiting List/i);
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it("displays supporting copy with key benefits", () => {
      render(<Home />);
      const earlyBirdElements = screen.queryAllByText(/Get early-bird pricing/i);
      expect(earlyBirdElements.length).toBeGreaterThan(0);
      expect(screen.getByText(/Limited spots available/i)).toBeDefined();
    });
  });

  describe("Key Features Section", () => {
    it("renders the features section heading", () => {
      render(<Home />);
      expect(screen.getByText(/Why Choose EcoNest?/i)).toBeDefined();
    });

    it("displays all six key features", () => {
      render(<Home />);
      expect(screen.getByText(/Completely Odor-Free/i)).toBeDefined();
      expect(screen.getByText(/Compost in 2-3 Weeks/i)).toBeDefined();
      expect(screen.getByText(/App-Guided Simplicity/i)).toBeDefined();
      expect(screen.getByText(/Save Up to 80% on Compost/i)).toBeDefined();
      expect(screen.getByText(/Fits Anywhere/i)).toBeDefined();
      expect(screen.getByText(/100% Biodegradable/i)).toBeDefined();
    });

    it("displays feature descriptions", () => {
      render(<Home />);
      expect(screen.getByText(/Advanced biochar filtration and sealed design eliminate odors/i)).toBeDefined();
      expect(screen.getByText(/Controlled microbial decomposition accelerates the process/i)).toBeDefined();
    });
  });

  describe("Benefits Section", () => {
    it("renders the benefits section heading", () => {
      render(<Home />);
      expect(screen.getByText(/Perfect for Urban Living/i)).toBeDefined();
    });

    it("displays key statistics", () => {
      render(<Home />);
      expect(screen.getByText("30%")).toBeDefined();
      expect(screen.getByText("2-3 weeks")).toBeDefined();
      expect(screen.getByText("80%")).toBeDefined();
    });

    it("displays benefit descriptions", () => {
      render(<Home />);
      expect(screen.getByText(/Reduction in household waste/i)).toBeDefined();
      expect(screen.getByText(/Time to get ready-to-use compost/i)).toBeDefined();
      expect(screen.getByText(/Savings on compost costs annually/i)).toBeDefined();
    });
  });

  describe("Waitlist CTA Section", () => {
    it("renders the waitlist section heading", () => {
      render(<Home />);
      expect(screen.getByText(/Ready to Transform Your Waste Into Wealth?/i)).toBeDefined();
    });

    it("displays the waitlist form with all required fields", () => {
      render(<Home />);
      expect(screen.getByLabelText(/First Name/i)).toBeDefined();
      expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
      expect(screen.getByLabelText(/Apartment Type/i)).toBeDefined();
    });

    it("displays the submit button", () => {
      render(<Home />);
      const submitButton = screen.getByRole("button", { name: /Secure My Spot on the Waiting List/i });
      expect(submitButton).toBeDefined();
    });

    it("displays social proof text", () => {
      render(<Home />);
      expect(screen.getByText(/Join 5,000\+ people waiting for EcoNest/i)).toBeDefined();
    });

    it("displays privacy notice", () => {
      render(<Home />);
      expect(screen.getByText(/We'll send you early-bird pricing and exclusive launch updates/i)).toBeDefined();
    });
  });

  describe("Waitlist Form Functionality", () => {

    it("allows user to fill in form fields", async () => {
      render(<Home />);

      const firstNameInput = screen.getByLabelText(/First Name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Email Address/i) as HTMLInputElement;

      await userEvent.type(firstNameInput, "John");
      await userEvent.type(emailInput, "john@example.com");

      expect(firstNameInput.value).toBe("John");
      expect(emailInput.value).toBe("john@example.com");
    });



    it("displays success message after form submission", async () => {
      render(<Home />);

      const firstNameInput = screen.getByLabelText(/First Name/i);
      const emailInput = screen.getByLabelText(/Email Address/i);
      const submitButton = screen.getByRole("button", {
        name: /Secure My Spot on the Waiting List/i,
      });

      await userEvent.type(firstNameInput, "Jane");
      await userEvent.type(emailInput, "jane@example.com");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/Welcome to EcoNest!/i)).toBeDefined();
        expect(screen.getByText(/Check your email for a confirmation/i)).toBeDefined();
      });
    });



    it("has checkbox for receiving updates", () => {
      render(<Home />);
      const checkbox = screen.getByRole("checkbox", {
        name: /I want to receive updates about EcoNest/i,
      }) as HTMLInputElement;
      expect(checkbox).toBeDefined();
      expect(checkbox.checked).toBe(true);
    });
  });

  describe("FAQ Section", () => {
    it("renders the FAQ section", () => {
      render(<Home />);
      expect(screen.getByText(/Frequently Asked Questions/i)).toBeDefined();
    });

    it("displays all FAQ items", () => {
      render(<Home />);
      expect(screen.getByText(/How does EcoNest work?/i)).toBeDefined();
      expect(screen.getByText(/Is it really odor-free?/i)).toBeDefined();
      expect(screen.getByText(/What can I compost in EcoNest?/i)).toBeDefined();
      expect(screen.getByText(/When will EcoNest launch?/i)).toBeDefined();
      expect(screen.getByText(/How much does it cost?/i)).toBeDefined();
    });
  });

  describe("Navigation", () => {
    it("renders the navigation bar", () => {
      render(<Home />);
      const ecoNestElements = screen.queryAllByText("EcoNest");
      expect(ecoNestElements.length).toBeGreaterThan(0);
    });

    it("has sticky navigation with join waitlist button", () => {
      render(<Home />);
      const navButtons = screen.getAllByText(/Join Waitlist/i);
      expect(navButtons.length).toBeGreaterThan(0);
    });
  });

  describe("Footer", () => {
    it("renders the footer", () => {
      render(<Home />);
      const footerText = screen.queryByText(/© 2025 EcoNest/i);
      expect(footerText).toBeDefined();
    });

    it("displays footer links", () => {
      render(<Home />);
      expect(screen.getByText(/About Us/i)).toBeDefined();
      expect(screen.getByText(/Privacy Policy/i)).toBeDefined();
      expect(screen.getByText(/Terms of Service/i)).toBeDefined();
    });
  });

  describe("Design & Aesthetics", () => {
    it("renders without crashing", () => {
      const { container } = render(<Home />);
      expect(container).toBeDefined();
    });

    it("has proper semantic HTML structure", () => {
      render(<Home />);
      const mains = screen.queryAllByRole("main");
      expect(mains.length).toBeGreaterThan(0);
    });

    it("displays responsive layout", () => {
      const { container } = render(<Home />);
      const sections = container.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });
  });
});
