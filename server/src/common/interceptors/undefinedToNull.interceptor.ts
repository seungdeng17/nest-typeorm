import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// 인터셉터는 마지막에 데이터를 한 번 더 가공해주는 역할
@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 가기 전 부분
    // ~
    return (
      next
        .handle()
        // 컨트롤러 실행 후 부분
        // ~
        .pipe(map((data) => (data === undefined ? null : data)))
    );
  }
}
