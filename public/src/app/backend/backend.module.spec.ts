import { BackendModule } from './backend.module';

describe('BackendModule', () => {
  let backendModule: BackendModule;

  beforeEach(() => {
    backendModule = new BackendModule();
  });

  it('should create an instance', () => {
    expect(backendModule).toBeTruthy();
  });
});
