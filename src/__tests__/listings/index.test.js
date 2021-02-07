import React from 'react';
import {
  render,
  screen,
  waitFor,
  getByClassName,
  querySelectorAll,
} from 'test-utils';

import Listings from '../../pages/index';
import { single, multiple, error } from './results';

describe('Listings', () => {
  let mocks;

  beforeEach(() => {
    mocks = [];
  });

  describe('loading states', () => {
    test('should display a loading message', async () => {
      const { getByText } = render(<Listings />, { mocks });
      expect(getByText('Loading...')).toBeInTheDocument();
    });

    test('should display an error message', async () => {
      mocks.push(error);
      render(<Listings />, { mocks });
      expect(await screen.findByText('Error')).toBeInTheDocument();
    });
  });

  describe('rendering', () => {
    describe('single listing', () => {
      beforeEach(() => {
        mocks.push(single);
      });

      test('should have an image', async () => {
        await render(<Listings />, { mocks });

        expect(
          await screen.findByAltText(/Picture of Grand Hyatt Dubai hotel/i),
        ).toBeInTheDocument();
      });

      test('should have a heading', async () => {
        render(<Listings />, { mocks });

        await waitFor(() =>
          expect(screen.getByText(/Grand Hyatt Dubai/)).toMatchInlineSnapshot(`
            <h1
              class="heading"
            >
              Grand Hyatt Dubai
            </h1>
          `),
        );
      });

      test('should have total cost', async () => {
        render(<Listings />, { mocks });

        expect(await screen.findByText('£800')).toBeInTheDocument();
      });

      test('should have cost per person', async () => {
        render(<Listings />, { mocks });

        expect(await screen.findByText('£400')).toBeInTheDocument();
      });

      test('should have two item for whats included', async () => {
        render(<Listings />, { mocks });

        await waitFor(() =>
          expect(getByClassName('includes__item')).toHaveLength(2),
        );
      });

      test('should have ratings', async () => {
        render(<Listings />, { mocks });

        expect(await screen.findByText('£400')).toBeInTheDocument();

        expect(querySelectorAll('.ratings span')).toHaveLength(5);
        expect(await screen.findByRole(/status/i)).toHaveTextContent(4);
      });

      test("should have a 'View More' link", async () => {
        render(<Listings />, { mocks });

        await waitFor(() =>
          expect(screen.getByText(/View More/)).toMatchInlineSnapshot(`
            <a
              class="pricing__link"
              href="#"
            >
              View More
            </a>
          `),
        );
      });
    });

    describe('multiple listings', () => {
      test('should have rendered two listings', async () => {
        mocks.push(multiple);
        render(<Listings />, { mocks });

        await waitFor(() => expect(getByClassName('listing')).toHaveLength(2));
      });
    });
  });
});
