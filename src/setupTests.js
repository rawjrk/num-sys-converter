import "@testing-library/jest-dom";
import { renderWithProviders, snapshotWithProviders } from "./utils/test-utils";

global.renderWithProviders = renderWithProviders;
global.snapshotWithProviders = snapshotWithProviders;
