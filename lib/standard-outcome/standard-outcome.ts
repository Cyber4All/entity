/**
 * Provide abstract representations for standard outcomes.
 */
import { Outcome } from '../outcome/outcome';
import { STANDARD_OUTCOME_ERRORS } from './error-messages';

/**
 * A class to represent a standard outcome. Immutable.
 * @class
 */
export class StandardOutcome implements Outcome {
  _author: string;
  /**
   * @property {string} source
   *       the organization or document this outcome is drawn from
   */
  get author(): string {
    return this._author;
  }
  set author(author: string) {
    if (author && author.trim()) {
      this._author = author;
    } else {
      throw new Error(STANDARD_OUTCOME_ERRORS.INVALID_AUTHOR);
    }
  }

  _name: string;
  /**
   * @property {string} name the label or unit of the outcome
   */
  get name(): string {
    return this._author;
  }
  set name(name: string) {
    if (name && name.trim()) {
      this._name = name;
    } else {
      throw new Error(STANDARD_OUTCOME_ERRORS.INVALID_NAME);
    }
  }

  _date: string;
  /**
   * @property {string} date the year this standard was established
   */
  get date(): string {
    return this._author;
  }
  set date(date: string) {
    if (date && date.trim()) {
      this._date = date;
    } else {
      throw new Error(STANDARD_OUTCOME_ERRORS.INVALID_DATE);
    }
  }
  /**
   * @property {string} outcome the text of the outcome
   */
  _outcome: string;
  get outcome(): string {
    return this._author;
  }
  set outcome(outcome: string) {
    if (outcome && outcome.trim()) {
      this._outcome = outcome;
    } else {
      throw new Error(STANDARD_OUTCOME_ERRORS.INVALID_OUTCOME);
    }
  }

  /**
   *Creates an instance of StandardOutcome.
   * @param {Partial<StandardOutcome>} [outcome]
   * @memberof StandardOutcome
   */
  constructor(outcome?: Partial<StandardOutcome>) {
    this._author = '';
    this._name = '';
    this._date = '';
    this._outcome = '';
    if (outcome) {
      this.copyOutcome(outcome);
    }
  }
  /**
   * Copies properties of outcome to this outcome if defined
   *
   * @private
   * @param {Partial<StandardOutcome>} outcome
   * @memberof StandardOutcome
   */
  private copyOutcome(outcome: Partial<StandardOutcome>): void {
    if (outcome.author) {
      this.author = outcome.author;
    }
    if (outcome.name) {
      this.name = outcome.name;
    }
    if (outcome.date) {
      this.date = outcome.date;
    }
    if (outcome.outcome) {
      this.outcome = outcome.outcome;
    }
  }
}
