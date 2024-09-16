import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;
  private userPermissions: string[] = [];

  constructor() { }

  /**
   * 登入方法
   * @param username - 用戶名
   * @param password - 密碼
   * @returns 登入成功返回 true，否則返回 false
   */
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.setAuthentication(true, 'admin', ['view_dashboard', 'edit_profile']);
      return true;
    } else if (username === 'user' && password === 'password') {
      this.setAuthentication(true, 'user', ['view_dashboard']);
      return true;
    }
    return false;
  }

  /**
   * 登出方法
   */
  logout(): void {
    this.setAuthentication(false, null, []);
  }

  /**
   * 檢查用戶是否已登入
   * @returns 已登入返回 true，否則返回 false
   */
  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * 獲取用戶角色
   * @returns 用戶角色
   */
  getUserRole(): string | null {
    return this.userRole;
  }

  /**
   * 獲取用戶權限
   * @returns 用戶權限列表
   */
  getUserPermissions(): string[] {
    return this.userPermissions;
  }

  /**
   * 設置用戶認證狀態
   * @param isAuthenticated - 是否已認證
   * @param userRole - 用戶角色
   * @param userPermissions - 用戶權限列表
   */
  private setAuthentication(isAuthenticated: boolean, userRole: string | null, userPermissions: string[]): void {
    this.isAuthenticated = isAuthenticated;
    this.userRole = userRole;
    this.userPermissions = userPermissions;
  }
}
